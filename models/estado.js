const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const estadoSchema = new Schema({
    fechaReserva:{
        type: Date,
        required: true
    },
    estado:{
        type: String,
        required : true
    },
    place: [{
        type: Schema.Types.ObjectId,
        ref: 'place'
    }],
    residente: [{
        type: Schema.Types.ObjectId,
        ref: 'residente'
    }]
});

module.exports = mongoose.model('estado', estadoSchema);
