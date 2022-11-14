const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PlaceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    state: {
        
        type: String,
        required: true
    }
    // date: {
    //     type: Date,
    //     required: true
    // }

});

module.exports = mongoose.model('Place', PlaceSchema);