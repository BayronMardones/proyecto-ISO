const express = require('express');
const api = express.Router();
const residenteController = require('../controllers/residenteController');

api.post('/residente', residenteController.createResidente);
api.get('/residentes', residenteController.getResidentes);
api.get('/residente/search/:id', residenteController.getResidente);
api.put('/residente/update/:id', residenteController.updateResidente);
api.delete('/residente/delete/:id', residenteController.deleteResidente);
api.post('/residente/login', residenteController.login);

module.exports = api;