const express = require('express')

const PatientController = require('./controllers/PatientController')
const ProfessionalController = require('./controllers/ProfessionalController')
const AttendanceController = require('./controllers/AttendanceController')

const routes = express.Router()

routes.post('/patient', PatientController.create)
routes.post('/patient/find', PatientController.find)
routes.put('/patient/:patient_id', PatientController.update)
routes.delete('/patient/:patient_id', PatientController.delete)

routes.post('/professional', ProfessionalController.create)
routes.post('/professional/find', ProfessionalController.find)
routes.put('/professional/:professional_id', ProfessionalController.update)
routes.delete('/professional/:professional_id', ProfessionalController.delete)

routes.post('/attendance/', AttendanceController.create)
routes.post('/attendance/count', AttendanceController.count)

module.exports = routes