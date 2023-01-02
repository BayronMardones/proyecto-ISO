const express = require('express');
const api = express.Router();
const placeController = require('../controllers/placeController');

api.post('/place', placeController.createPlace);
api.get('/places', placeController.getPlaces);
api.get('/place/search/:id', placeController.getPlace);
api.put('/place/update/:id', placeController.updatePlace);
api.delete('/place/delete/:id', placeController.deletePlace);



module.exports = api;