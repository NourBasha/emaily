const express = require('express');

const cookieSession = require('cookie-session');

const keys = require('./config/keys');

//mongodb 
const mongoose = require('mongoose');
const passport = require('passport');

// define model = collection into mongoose
require('./models/User');

// passport strategy work 
require('./services/passport');


mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true });
        

// our express instance
const app = express();


app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
}));

app.use(passport.initialize());
app.use(passport.session());


//same as: const routes = require('./......'); 
//    routes(app);
// pass instance to handlers 
require('./routes/authRoutes')(app);




// if we're in production then take the service provider port at runtime,
// else take default for development purposes
const PORT = process.env.PORT || 5000
// listen to port
app.listen(PORT);