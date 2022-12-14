const Place = require('../models/place');

const createPlace = (req, res) => {
    const {name, capacidad, descripcion, estado} = req.body;
    const newPlace = new Place({
        name,
        capacidad,
        descripcion,
        estado
    });
    newPlace.save((err, place) => {
        if(err){
            return res.status(400).send({message: "Error al crear place"})
        }
        return res.status(200).send(place)
    })
}

const getPlaces = (req, res) => {
    Place.find({}, (err, places) => {
        if(err){
            return res.status(400).send({message: "Error al buscar el place"})
        }
        return res.status(200).send(places)
    })
}

const getPlace = (req, res) => {
    const { id } = req.params
    Place.findById(id, req.body, (error, place) => {
        if(error){
            return res.status(400).send({message: "Error al buscar el place"})
        }
        if (!place) {
            return res.status(404).send({ message: "No se ha podido encontrar el place" })
        }
        return res.status(200).send(place)
    })
}

//nuevo

const updatePlace = (req, res) => {
    const { id } = req.params
    Place.findByIdAndUpdate(id, req.body, (error, place) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo actualizar el espacio" })
        }
        if (!place) {
            return res.status(404).send({ message: "No se encontro el espacio" })
        }
        return res.status(200).send({ message: "Espacio modificado" })
    })
}

const deletePlace = (req, res) => {
    const { id } = req.params
    Place.findByIdAndDelete(id, (error, place) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido eliminar el espacio" })
        }
        if (!place) {
            return res.status(404).send({ message: "No se ha podido encontrar un espacio" })
        }
        return res.status(200).send({ message: "Se ha eliminado el espacio de forma correcta" })
    })
}

//nuevo fin



module.exports = {
    createPlace,
    getPlaces,
    getPlace,
    updatePlace,
    deletePlace
}