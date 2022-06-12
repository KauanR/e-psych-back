const Patient = require('../models/Patient')

module.exports = {
    async create(req, res) {
        try {
            const patient = await Patient.create(req.body)
            return res.json(patient)
        } catch(err) {
            console.log(err)
            return res.status(500).json({err})
        }
    },

    async update(req, res) {
        const { patient_id } = req.params

        const {
            phone_number,
            address,
            address_number,
            zip_code
        } = req.body

        try {
            const patient = await Patient.update(
                {
                    phone_number,
                    address,
                    address_number,
                    zip_code
                },
                {
                    where: {id: patient_id}
                }
            )

            return res.json(patient)
        } catch(err) {
            console.log(err)
            return res.status(500).json({err})
        }
    },

    async find(req, res) {
        const { email } = req.body

        const patient = await Patient.findOne({
            where: { email },
            raw: true
        })

        if(!patient)
            return res.json({})
    
        return res.json(patient)
    }
}