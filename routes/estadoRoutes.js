const express = require('express');
const api = express.Router();
const estadoController = require('../controllers/estadoController');

api.post('/estado', estadoController.createEstado);
api.get('/estados', estadoController.getEstados);
api.get('/estado/search/:id', estadoController.getEstado);
api.delete('/estado/delete/:id', estadoController.deleteEstado);
api.put('/estado/update/:id', estadoController.updateEstado);


module.exports = api;
