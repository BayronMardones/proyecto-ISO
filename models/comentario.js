const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comentarioSchema = new Schema({
    idEstado: {
        type: String,
        required: true
    },
    nombreResidente: {
        type: String,
        required: true
    },
    comentario:{
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required : true
    },

});

module.exports = mongoose.model('comentario', comentarioSchema);
