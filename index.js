const express = require('express');

const cookieSession = require('cookie-session');

const keys = require('./config/keys');

//mongodb 
const mongoose = require('mongoose');
const passport = require('passport');

// define model = collection into mongoose
require('./models/User');
// define model = collection into mongoose
require('./models/Survey');

// passport strategy work 
require('./services/passport');

mongoose.connect(keys.mongoURI, { useUnifiedTopology: true, useNewUrlParser: true });     

// our express instance
const app = express();


app.use(express.json());

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
require('./routes/billingRoute')(app);
require('./routes/surveyRoutes')(app);


if (process.env.NODE_ENV === 'production'){

    //serves the entire build directory if route is not defined in server 
    app.use(express.static('client/build')); 

    // serves index.html if the requested route is not recognised and all the previous handlers fail to serve it 
    const path = require('path');

    app.get ('*', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });

}


// if we're in production then take the service provider port at runtime,
// else take default for development purposes
const PORT = process.env.PORT || 5000
// listen to port
app.listen(PORT);