const Estado = require('../models/estado');
const sendmail = require('../controllers/mailerController');

const createEstado = (req, res) => {
    const {fechaReserva, estado, place, residente} = req.body;
    const newEstado = new Estado({
        fechaReserva,
        estado,
        place,
        residente
    });
    newEstado.save((err, estado) => {
        if(err){
            return res.status(400).send({message: "Error al crear estado"})
        }

        let directory = [//que hay que cambiarlo luego por el de los residentes
        'bayron.mardones1901@alumnos.ubiobio.cl'  
        ]
        const mailOptions = {
            from: `Sistema de reservas <reserva espacio>`,
            to: directory,
            subject: 'Reserva de espacios',
            text: `se ha creado una reserva por el usuario ${estado.residente}`
        }
        sendmail(mailOptions)

        return res.status(200).send(estado)
    })
}

const getEstados = (req, res) => {
    Estado.find({}).populate({ path: 'place residente' }).exec((error, estados) => {
        if(error){
            return res.status(400).send({message: "Error al buscar el estado"})
        }

        return res.status(200).send(estados)
    })
}

const getEstado = (req, res) => {
    const { id } = req.params
    Estado.findById(id).populate({ path: 'place residente' }).exec((error, estado) => {
        if(error){
            return res.status(400).send({message: "Error al buscar el estado"})
        }
        if (!estado) {
            return res.status(404).send({ message: "No se ha podido encontrar el estado" })
        }
        return res.status(200).send(estado)
    })
}


const deleteEstado = (req, res) => {
    const { id } = req.params
    Estado.findByIdAndDelete(id, (error, estado) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido eliminar el estado" })
        }
        if (!estado) {
            return res.status(404).send({ message: "No se ha podido encontrar un estado" })
        }
        return res.status(200).send({ message: "Se ha eliminado el estado de forma correcta" })
    })
}

const updateEstado = (req, res) => {
    const { id } = req.params
    Estado.findByIdAndUpdate(id, req.body, (error, estado) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo actualizar el estado" })
        }
        if (!estado) {
            return res.status(404).send({ message: "No se encontro el estado" })
        }
        return res.status(200).send({ message: "Estado modificado" })
    })
}

module.exports = {
    createEstado,
    getEstados,
    getEstado,
    deleteEstado,
    updateEstado,
}
