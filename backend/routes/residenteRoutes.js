const express = require('express');
const api = express.Router();
const residenteController = require('../controllers/residenteController');

api.post('/residente', residenteController.createResidente);
api.get('/residentes', residenteController.getResidentes);
api.put('/residente/update/:id', residenteController.updateResidente);
api.delete('/residente/delete/:id', residenteController.deleteResidente);

module.exports = api;