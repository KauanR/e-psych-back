const express = require('express')

const PatientController = require('./controllers/PatientController')
const ProfessionalController = require('./controllers/ProfessionalController')

const routes = express.Router()

routes.post('/patient', PatientController.create)
routes.post('/patient/find', PatientController.find)
routes.put('/patient/:patient_id', PatientController.update)

routes.post('/professional', ProfessionalController.create)
routes.post('/professional/find', ProfessionalController.find)
routes.put('/professional/:professional_id', ProfessionalController.update)

module.exports = routes