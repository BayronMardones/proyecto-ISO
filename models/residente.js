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

});

<<<<<<< HEAD
module.exports = mongoose.model('Residente', ResidenteSchema);
=======
module.exports = mongoose.model('Residente', ResidenteSchema);
>>>>>>> 1b9e34cc779826b2eb6652e65d39e0554f1920e8
