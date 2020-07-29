const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/TravelPassDb');

const Schema=mongoose.Schema;
var UserDataPassSchema = new Schema ({
    Name : String,
    Address : String,
    Phone : Number,
    Tr_purpose : String,
    Date1 : Date,
    Date2 : Date
});

var UserDataPass = mongoose.model('userdata', UserDataPassSchema);
module.exports = UserDataPass;
