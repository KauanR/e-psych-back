const express = require('express')
const router = express.Router()

const AttendanceController = require('../controllers/AttendanceController')

router.post('/attendance/', AttendanceController.create)
router.post('/attendance/count', AttendanceController.count)

module.exports = router