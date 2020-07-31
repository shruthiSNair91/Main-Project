const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/TravelPassDb');

const Schema=mongoose.Schema;
var signupSchema = new Schema ({
    phone : Number,
    pswd : String
});

var signUp = mongoose.model('signup', signupSchema);
module.exports = signUp;
