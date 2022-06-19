const express = require('express')
const router = express.Router()

const controller = require('../controllers/PatientController')

// Create
router.post('/', controller.create)
// Read
router.post('/find', controller.find)
// Update
router.put('/:patient_id', controller.update)
// Delete
router.delete('/:patient_id', controller.delete)

module.exports = router