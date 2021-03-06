const _ = require("lodash");
const { Path } = require("path-parser");
const { URL } = require("url");

const mongoose = require("mongoose");
const requireLogin = require("../middlewares/requireLogin");
const requireCredits = require("../middlewares/requireCredits");

const Mailer = require("../services/Mailer");
const surveyTemplate = require("../services/emailTemplates/surveyTemplate");

const Survey = mongoose.model("surveys");

module.exports = (app) => {
  app.get("/api/surveys", requireLogin, async (req, res) => {
    const surveys = await Survey.find({ _user: req.user.id }) // find all surveys for this user
      .select({ recipients: false }); // do not include recipients list with response

    res.send(surveys);
  });

  app.get("/api/surveys/:surveyid/:answer", (req, res) => {
    res.redirect("/reply/thanks");
  });

  app.post("/api/surveys/webhooks", async (req, res) => {
    // template to show exactly what we want to extract from the url, in this case, survey id and the choice

    try {
      const p = new Path("/api/surveys/:surveyId/:choice");

      const result = _.chain(req.body)
        .map(({ email, url }) => {
          // extracts the path after the domain name
          const pathname = new URL(url).pathname;

          // return the object that matches the template, match either null or containing an object
          const match = p.test(pathname);
          if (match) {
            return {
              email: email.toLowerCase(),
              surveyId: match.surveyId,
              choice: match.choice,
            };
          }
        })
        // removes elements that are undefined
        .compact()
        // gets rid of dublicate data
        .uniqBy("email", "surveyId")
        // sets the final data inside events var
        .value();

      //loops over each event, and sends the update to MongoDB
      _.map(result, async ({ surveyId, email, choice }) => {
      
        await Survey.updateOne(
          {
            _id: surveyId,
            recipients: {
              $elemMatch: { email: email, responded: false },
            },
          },
          {
            $inc: { [choice]: 1 },
            $set: { "recipients.$.responded": true },
            lastResponded: new Date(),
          }
        );
      });

      res.send({});
    } catch (error) {
      res.status(422).send(error);
    }
  });

  app.post("/api/surveys", requireLogin, requireCredits, async (req, res) => {
    const { title, subject, body, recipients } = req.body;

    const survey = new Survey({
      title,
      subject,
      body,
      recipients: recipients
        .split(",")
        .map((email) => ({ email: email.trim().toLowerCase() })),
      _user: req.user.id,
      dateSent: Date.now(),
    });

    // mail instance to be sent
    const mailer = new Mailer(survey, surveyTemplate(survey));

    try {
      await mailer.send();
      await survey.save();

      req.user.credits -= 1;
      const user = await req.user.save();

      res.send(user);
    } catch (error) {
      res.status(422).send(error); // 422 unprocessable entity
    }
  });

  app.delete("/api/delete-survey", requireLogin, async (req, res) => {
    await Survey.deleteOne({ _id: req.body.surveyID });

    const surveys = await Survey.find({ _user: req.user.id }).select({
      recipients: false,
    });

    res.send(surveys);
  });
};
