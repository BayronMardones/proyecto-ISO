const Comentario = require('../models/comentario');

const createComentario = (req, res) => {
    const {idEstado, nombreResidente, comentario, imagen} = req.body;
    const newComentario = new Comentario({
        idEstado,
        nombreResidente,
        comentario,
        imagen,
    });
    newComentario.save((err, comentario) => {
        if(err){
            return res.status(400).send({message: "Error al crear comentario"})
        }
        return res.status(200).send(comentario)
    })
}

const getComentarios = (req, res) => {
    Comentario.find({}, (err, comentarios) => {
        if(err){
            return res.status(400).send({message: "Error al buscar el place"})
        }
        return res.status(200).send(comentarios)
    })
}

module.exports = {
    createComentario,
    getComentarios
}
