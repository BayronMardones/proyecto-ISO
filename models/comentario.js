const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comentarioSchema = new Schema({
    estado: [{
        type: Schema.Types.ObjectId,
        ref: 'estado'
    }],
    nombreResidente: {
        type: String,
        required: true
    },
    comentario:{
        type: String,
        required: true
    },


});

module.exports = mongoose.model('comentario', comentarioSchema);
