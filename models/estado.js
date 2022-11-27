const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estadoSchema = new Schema({
    idPlace: {
        type: String,
        required: true
    },
    idResidente: {
        type: String,
        required: true
    },
    fechaReserva:{
        type: Date,
        required: true
    },
    estado:{
        type: String,
        required : true
    },

});

module.exports = mongoose.model('estado', estadoSchema);
