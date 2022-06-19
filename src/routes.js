const express = require('express')
const router = express.Router()

router.use('/patient', require('./routes/PatientRoutes'))
router.use('/professional', require('./routes/ProfessionalRoutes'))
router.use('/attendance', require('./routes/AttendanceRoutes'))

module.exports = router