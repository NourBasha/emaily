
if (process.env.NODE_ENV ==='production'){
    // inside production, use prod keys
    module.exports = require('./prod');

}else {
    // inside development use dev keys
     module.exports = require('./dev');
}