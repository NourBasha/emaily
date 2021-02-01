const mongoose = require('mongoose');

const {Schema} = mongoose ;

const RecipientSchema = require('./Recipient');


const SurveySchema = new Schema ({
    title : String,
    subject : String,
    body: String, 
    recipients: [RecipientSchema], // subdocument collecetion for email and response flag
    yes : {type:Number, default:0},
    no : {type:Number, default:0},
    _user : {type: Schema.Types.ObjectId , ref:'User'}, // the owner of this survey, a user can have many surveys
    dateSent : Date,
    lastResponded : Date
});


mongoose.model('surveys', SurveySchema);