const Patient = require('../models/Patient')

module.exports = {
    async create(req, res) {
        const patient = await Patient.create(req.body)

        return res.json(patient)
    }
}