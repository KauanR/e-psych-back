const Patient = require('../models/Patient')
const Professional = require('../models/Professional')

module.exports = {
    async find(req, res) {
        const { email } = req.body

        const patient = await Patient.findOne({ where: { email } })
        const professional = await Professional.findOne({ where: { email } })

        if(patient || professional)
            return res.json(patient || professional)
        else
            return res.status(404).json({error: 'User not found'})
    }
}