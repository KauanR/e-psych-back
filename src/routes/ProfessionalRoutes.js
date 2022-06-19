const express = require('express')
const router = express.Router()

const controller = require('../controllers/ProfessionalController')

// Create
router.post('/', controller.create)
// Read
router.get('/', controller.readAll)
router.get('/:professional_id', controller.readOne)
router.post('/find', controller.find)
// Update
router.put('/:professional_id', controller.update)
// Delete
router.delete('/:professional_id', controller.delete)

module.exports = router