const express = require('express');

const app = express();


// handler
app.get('/', (req, res)=>{
    res.send({hi: 'hello again'});
});





// if we're in production then take the service provider port at runtime,
// else take default for development purposes
const PORT = process.env.PORT || 5000
// listen to port
app.listen(PORT);