module.exports = (req, res, next) =>{

    if(req.user.credits < 1 ){
        return res.status(402).send({error: 'Not Enough Credits!'});
    }

    next(); // everything is working great, move to the next middleware 

};