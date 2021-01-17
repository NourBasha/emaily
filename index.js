const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

// our express instance
const app = express();



// register strategy into passport
passport.use(new GoogleStrategy({ 
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL : '/auth/google/callback'
 }, (accessToken, refreshToken,  profile, done) =>{
        console.log('access token :', accessToken);
        console.log('refresh token :', refreshToken);
        console.log('profile:',profile);
  })
  );



// user tries to log in with google
app.get('/auth/google', passport.authenticate('google', {
                 scope: ['profile','email']
}))

// user grants permission to google to use his profile and email data and redirected to our app with the CODE
// we use the code sent back to continue and get the profile and email
app.get('/auth/google/callback', passport.authenticate('google'));

// if we're in production then take the service provider port at runtime,
// else take default for development purposes
const PORT = process.env.PORT || 5000
// listen to port
app.listen(PORT);