const Professional = require('../models/Professional')

module.exports = {
    async create(req, res) {
        const professional = await Professional.create(req.body)

        return res.json(professional)
    },

    async update(req, res) {
        const { professional_id } = req.params

        const {
            phone_number,
            address,
            address_number,
            zip_code,
            register_number,
            cost_level,
            observations
        } = req.body

        try {
            const professional = await Professional.update(
                {
                    phone_number,
                    address,
                    address_number,
                    zip_code,
                    register_number,
                    cost_level,
                    observations
                },
                {
                    where: {id: professional_id}
                }
            )

            return res.json(professional)
        } catch(err) {
            console.log(err)
            return res.status(500).json({err})
        }
    }
}