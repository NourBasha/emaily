const passport = require('passport');

module.exports = (app) => {
    // user tries to log in with google
app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile','email']
}))

// user grants permission to google to use his profile and email data and redirected to our app with the CODE
// we use the code sent back to continue and get the profile and email
app.get('/auth/google/callback', passport.authenticate('google'));


app.get('/api/logout',(req,res)=>{
    req.logout();
    res.send(req.user);
})

app.get('/api/current_user',(req,res)=>{
    res.send(req.user);
})

};