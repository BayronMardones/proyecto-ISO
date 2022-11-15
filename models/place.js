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
    },
    residente: {
        type: String, 
        required: true

        // mongoose.Schema.Types.ObjectId,
        // ref:'residente'
    }
    // date: {
    //     type: Date,
    //     required: true
    // }

});

module.exports = mongoose.model('Place', PlaceSchema);