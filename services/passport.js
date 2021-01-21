
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');



const User = mongoose.model('users');


passport.serializeUser((user,done)=>{
    done(null,user.id); // user.id referes to record id in mongodb for that user .. not google id
    // returns id
});

passport.deserializeUser((id,done)=>{

  User.findById(id)
  .then(user=>{
      done(null,user); // returns user 
  })
})


// register strategy into passport
passport.use(new GoogleStrategy({ 
    clientID : keys.googleClientID,
    clientSecret : keys.googleClientSecret,
    callbackURL : '/auth/google/callback',
    proxy:  true
 },  (accessToken, refreshToken,  profile, done) =>{
      
          User.findOne({googleID:profile.id})
          .then((existing)=>{
              if(existing){
                // user alrady exists
                done(null,existing);
              }else {
                //no user found with that ID, create a new user
                new User({googleID: profile.id}).save()
                .then( addedUser=>{
                  done(null,addedUser);
                });
              }
          })
         
      
  })
  );


  // mongoose.connection.readyState