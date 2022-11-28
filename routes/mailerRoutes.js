const express = require('express')
const api = express.Router()
const mailerController = require('../controllers/mailerController')

api.post('/mailer', mailerController)

module.exports = api
