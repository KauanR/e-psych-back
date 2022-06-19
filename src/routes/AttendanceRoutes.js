const express = require('express')
const router = express.Router()

const AttendanceController = require('../controllers/AttendanceController')

router.post('/', AttendanceController.create)
router.post('/count', AttendanceController.count)

module.exports = router