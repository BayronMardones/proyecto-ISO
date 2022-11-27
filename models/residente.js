const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ResidenteSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    numeroHogar: {
        type: Number,
        required: true
    },
    rol:{
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Residente', ResidenteSchema);