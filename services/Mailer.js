const sendgrid = require('sendgrid');

const helper = sendgrid.mail;

const keys = require('../config/keys');


class Mailer extends helper.Mail {

    constructor({subject, recipients}, content){ // notice the object destructuring 

        super();

        this.sgApi = sendgrid(keys.sendGridKey);
        this.from_email = new helper.Email('Nour.nws@gmail.com'); // sender email created on sendgrid (verified)
        this.subject = subject; // from survey 
        this.body = new helper.Content('text/html',content); // from template 
        this.recipients = this.formatAddresses(recipients); // from survey

        this.addContent(this.body); // built-in function function inside helper.Mail
        this.addClickTracking(); // we define it, to track links inside our email
        this.addRecipients(); // we define this

    }

    formatAddresses (recipients){
        return recipients.map(({email})=> { // object destructuring 
            return new helper.Email(email);
        })
    }

    addClickTracking(){

        const trackingSettings = new helper.TrackingSettings();
        const clickTracking = new helper.ClickTracking(true,true);

        trackingSettings.setClickTracking(clickTracking);
        this.addTrackingSettings(trackingSettings);

    }

    addRecipients (){
        const personalize = new helper.Personalization();
        this.recipients.forEach(recipient => {
            personalize.addTo(recipient);
        });
        this.addPersonalization(personalize);
    }

    async send(){

        const request = this.sgApi.emptyRequest({
            method: 'POST',
            path: '/v3/mail/send',
            body: this.toJSON()
        });

        const response = await this.sgApi.API(request);

        return response;
    }


}

module.exports = Mailer;