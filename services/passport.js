const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("../config/keys");
const mongoose = require("mongoose");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
  done(null, user.id); // user.id referes to record id in mongodb for that user .. not google id
  // returns id
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    done(null, user); // returns user
  });
});

// register strategy into passport
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
      proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
      try {
            const existing = await User.findOne({ googleID: profile.id });
          if (existing) {
            return done(null, existing);
          }
          const addedUser = await new User({ googleID: profile.id }).save();
      done(null, addedUser);
      } catch (error) {
        console.log(error);
      }
    }
  )
);