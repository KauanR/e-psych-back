const express = require('express')
const router = express.Router()

const controller = require('../controllers/AttendanceController')

// Create
router.post('/', controller.create)
// Read
router.post('/count', controller.count)
// Update
// router.put(/:attendance_id, controller.update)
// Delete
// router.delete('/:attendance_id', controller.delete)


module.exports = router