const express = require('express')
const router = express.Router()

const PatientController = require('../controllers/PatientController')

router.post('/', PatientController.create)
router.post('/find', PatientController.find)
router.put('/:patient_id', PatientController.update)
router.delete('/:patient_id', PatientController.delete)

module.exports = router