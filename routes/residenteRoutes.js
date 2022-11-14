const express = require('express');
const api = express.Router();
const residenteController = require('../controllers/residenteController');

api.post('/residente', residenteController.createResidente);
api.get('/residentes', residenteController.getResidentes);

module.exports = api;
