const Comentario = require('../models/comentario');
const sendmail = require('../controllers/mailerController');

const createComentario = (req, res) => {
    const {estado, nombreResidente, comentario} = req.body;
    const newComentario = new Comentario({
        estado,
        nombreResidente,
        comentario
    });
    newComentario.save((err, comentario) => {
        if(err){
            return res.status(400).send({message: "Error al crear comentario"})
        }

        let directory = [//que hay que cambiarlo luego por el de los residentes
        'bayron.mardones1901@alumnos.ubiobio.cl'
        ]
        const mailOptions = {
            from: `Sistema de reservas <reserva espacio>`,
            to: directory,
            subject: 'Comentario de reserva',
            text: `se ha hecho un comentario a la reserva ${comentario.estado}`
        }
        sendmail(mailOptions)

        return res.status(200).send(comentario)
    })
}

const getComentarios = (req, res) => {
    Comentario.find({}).populate({ path: 'estado' }).exec((error, comentarios) => {
        if(error){
            return res.status(400).send({message: "Error al buscar el comentario"})
        }
        return res.status(200).send(comentarios)
    })
}

const updateComentario = (req, res) => {
    const { id } = req.params
    Comentario.findByIdAndUpdate(id, req.body, (error, comentario) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo actualizar el comentario" })
        }
        if (!comentario) {
            return res.status(404).send({ message: "No se encontro el comentario" })
        }
        return res.status(200).send({ message: "Comentario modificado" })
    })
}

const deleteComentario = (req, res) => {
    const { id } = req.params
    Comentario.findByIdAndDelete(id, (error, comentario) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido eliminar el comentario" })
        }
        if (!comentario) {
            return res.status(404).send({ message: "No se ha podido encontrar el comentario" })
        }
        return res.status(200).send({ message: "Se ha eliminado el comentario"})
    })
}

module.exports = {
    createComentario,
    getComentarios,
    updateComentario,
    deleteComentario
}
