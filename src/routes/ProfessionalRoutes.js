const express = require('express')
const router = express.Router()

const ProfessionalController = require('../controllers/ProfessionalController')

router.post('/', ProfessionalController.create)
router.post('/find', ProfessionalController.find)
router.get('/', ProfessionalController.readAll)
router.get('/:professional_id', ProfessionalController.readOne)
router.put('/:professional_id', ProfessionalController.update)
router.delete('/:professional_id', ProfessionalController.delete)

module.exports = router