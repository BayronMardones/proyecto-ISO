const Place = require('../models/place');

const createPlace = (req, res) => {
    const {name, capacity, state} = req.body;
    const newPlace = new Place({
        name,
        capacity,
        state
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
            return res.status(400).send({message: "Error al crear el place"})
        }
        return res.status(200).send(places)
    })
}
module.exports = {
    createPlace,
    getPlaces
}