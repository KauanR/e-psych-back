const express = require('express')

const UserController = require('./controllers/UserController')
const PatientController = require('./controllers/PatientController')
const ProfessionalController = require('./controllers/ProfessionalController')

const routes = express.Router()

routes.post('/find-user', UserController.find)

routes.post('/patient', PatientController.create)
routes.put('/patient/:patient_id', PatientController.update)

routes.post('/professional', ProfessionalController.create)
routes.put('/professional/:professional_id', ProfessionalController.update)

module.exports = routes