
if (process.env.NODE_ENV ==='production'){
    // inside production, use prod keys
    console.log('inside production keys');
    module.exports = require('./prod');

}else {
    // inside development use dev keys
    console.log('inside development keys');

     module.exports = require('./dev');
}