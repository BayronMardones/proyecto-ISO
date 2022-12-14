const express = require('express');
const api = express.Router();
const comentarioController = require('../controllers/comentarioController');

api.post('/comentario', comentarioController.createComentario);
api.get('/comentarios', comentarioController.getComentarios);
api.put('/comentario/update/:id', comentarioController.updateComentario);
api.delete('/comentario/delete/:id', comentarioController.deleteComentario);
module.exports = api;