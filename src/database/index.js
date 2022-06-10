const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Patient = require('../models/Patient')
const Professional = require('../models/Professional')
const Attendance = require('../models/Attendance')
const Appointment = require('../models/Appointment')
const Report = require('../models/Report')

const connection = new Sequelize(dbConfig)

Patient.init(connection)
Professional.init(connection)
Attendance.init(connection)
Appointment.init(connection)
Report.init(connection)

Patient.associate(connection.models)
Professional.associate(connection.models)
Attendance.associate(connection.models)
Appointment.associate(connection.models)
Report.associate(connection.models)

module.exports = connection