const express = require('express')
const router = express.Router()

const controller = require('../controllers/ReportController')

// Create
router.post('/', controller.create)
// Read
router.get('/:attendance_id', controller.readAll)
// Update
// router.put('/:attendance_id', controller.update)
// Delete
// router.delete('/:attendance_id', controller.delete)


module.exports = router