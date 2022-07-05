require('dotenv').config()
require('./database')
const cors = require('cors')
const express = require('express')

const app = express()

// Habilitando o CORS
app.use(cors())
// Middleware pra utilizar JSON na aplicação
app.use(express.json())

// Rotas da aplicação
app.use('/patients', require('./routes/PatientRoutes'))
app.use('/professionals', require('./routes/ProfessionalRoutes'))
app.use('/attendances', require('./routes/AttendanceRoutes'))
app.use('/appointments', require('./routes/AppointmentRoutes'))

// "Abrindo" o servidor
app.listen(process.env.PORT)
console.log(`Running on port ${process.env.PORT}`)