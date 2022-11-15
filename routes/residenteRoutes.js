const express = require('express');
const api = express.Router();
const residenteController = require('../controllers/residenteController');

api.post('/residente', residenteController.createResidente);
api.get('/residentes', residenteController.getResidentes);
<<<<<<< HEAD
api.put('/residente/update/:id', residenteController.updateResidente);
api.delete('/residente/delete/:id', residenteController.deleteResidente);

module.exports = api;
=======

module.exports = api;
>>>>>>> 1b9e34cc779826b2eb6652e65d39e0554f1920e8
