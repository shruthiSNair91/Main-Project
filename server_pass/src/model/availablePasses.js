const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost:27017/TravelPassDb');

const Schema=mongoose.Schema;
var TravelPassCountSchema = new Schema ({
    pass_date : Date,
    pass_count : Number
});

var TravelPassCount = mongoose.model('passcount', TravelPassCountSchema);
module.exports = TravelPassCount;
