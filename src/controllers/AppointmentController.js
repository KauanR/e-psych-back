const Appointment = require('../models/Appointment')

module.exports = {
    async create(req, res) {
        try {
            const appointment = await Appointment.create(req.body)
            return res.json(appointment)
        } catch(err) {
            console.log(err)
            return res.status(500).json({err})
        }
    },

    async readAll(req, res) {
        const { attendance_id } = req.params

        try {
            const appointments = await Appointment.findAll({ where: { attendance_id } })

            return res.json(appointments)
        } catch(err) {
            console.log(err)
            return res.status(500).json({err})
        }
    }
}