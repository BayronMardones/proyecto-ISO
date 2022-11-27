const Estado = require('../models/estado');

const createEstado = (req, res) => {
    const {idPlace, idResidente, fechaReserva, estado} = req.body;
    const newEstado = new Estado({
        idPlace,
        idResidente,
        fechaReserva,
        estado,
    });
    newEstado.save((err, estado) => {
        if(err){
            return res.status(400).send({message: "Error al crear estado"})
        }
        return res.status(200).send(estado)
    })
}

const getEstados = (req, res) => {
    Estado.find({}, (err, estados) => {
        if(err){
            return res.status(400).send({message: "Error al buscar el estado"})
        }
        return res.status(200).send(estados)
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
    deleteEstado,
    updateEstado
}
