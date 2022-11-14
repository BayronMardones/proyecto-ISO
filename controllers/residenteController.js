const Residente = require('../models/residente');

const createResidente = (req, res) => {
    const {name, numeroHogar} = req.body;
    const newResidente = new Residente({
        name,
        numeroHogar
    });
    newResidente.save((err, residente) => {
        if(err){
            return res.status(400).send({message: "Error al crear residente"})
        }
        return res.status(200).send(residente)
    })
}

const getResidentes = (req, res) => {
    Residente.find({}, (err, residentes) => {
        if(err){
            return res.status(400).send({message: "Error al crear el residente"})
        }
        return res.status(200).send(residentes)
    })
}
module.exports = {
    createResidente,
    getResidentes
}