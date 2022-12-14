const Residente = require('../models/residente');

const createResidente = (req, res) => {
    const {name, numeroHogar, rol, sanciones} = req.body;
    const newResidente = new Residente({
        name,
        numeroHogar,
        rol,
        sanciones,
    });
    newResidente.save((err, residente) => {
        if(err){
            return res.status(400).send({message: "Error al crear residente"})
        }
        return res.status(200).send(residente)
    })
}

const login = (req, res) => {
    const{rol} = req.body;
    Residente.find({ rol }, (err, residente)=>{
        if(err) {
            return res.status(400).send({message: "Error al encontrar el residente"})
        }
        if(!residente){
            return res.status(404).send({ message: "No se ha podido encontrar el residente" })
        }
        return res.status(200).send({ message: "Se ha logeado correctamente" })
    })
}

const getResidentes = (req, res) => {
    Residente.find({}, (err, residentes) => {
        if(err){
            return res.status(400).send({message: "Error al encontrar el residente"})
        }
        return res.status(200).send(residentes)
    })
}

const getResidente = (req, res) => {
    const { id } = req.params
    Residente.findById(id, req.body, (error, residente) => {
        if(error){
            return res.status(400).send({message: "Error al buscar el residente"})
        }
        if (!residente) {
            return res.status(404).send({ message: "No se ha podido encontrar el residente" })
        }
        return res.status(200).send(residente)
    })
}

//
const updateResidente = (req, res) => {
    const { id } = req.params
    Residente.findByIdAndUpdate(id, req.body, (error, residente) => {
        if (error) {
            return res.status(400).send({ message: "No se pudo actualizar el residente" })
        }
        if (!residente) {
            return res.status(404).send({ message: "No se encontro el residente" })
        }
        return res.status(200).send({ message: "Residente modificado" })
    })
}

const deleteResidente = (req, res) => {
    const { id } = req.params
    Residente.findByIdAndDelete(id, (error, residente) => {
        if (error) {
            return res.status(400).send({ message: "No se ha podido eliminar el residente" })
        }
        if (!residente) {
            return res.status(404).send({ message: "No se ha podido encontrar un residente" })
        }
        return res.status(200).send({ message: "Se ha eliminado el residente de forma correcta" })
    })
}
//
module.exports = {
    createResidente,
    login,
    getResidentes,
    getResidente,
    updateResidente,
    deleteResidente
}
