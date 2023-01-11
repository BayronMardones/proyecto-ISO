const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PlaceSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    capacidad: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('place', PlaceSchema);
