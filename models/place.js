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
    // residente: {
    //     type: String, 
    //     required: true

    //     // mongoose.Schema.Types.ObjectId,
    //     // ref:'residente'
    // },
    descripcion: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    },
   
});

module.exports = mongoose.model('Place', PlaceSchema);
