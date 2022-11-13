const express = require('express');
const api = express.Router();
const placeController = require('../controllers/placeController');

api.post('/place', placeController.createPlace);
api.get('/places', placeController.getPlaces);

module.exports = api;