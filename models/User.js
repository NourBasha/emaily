const mongoose = require('mongoose');

/// same as .. const Schema = mongoose.Schema ;
const {Schema} = mongoose;


const userSchema = new Schema({
        googleID: String,
        credits : {type : Number, default : 0}
})

// ceate the users collection if not existing 
mongoose.model('users', userSchema);