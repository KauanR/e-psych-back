const { fn, col } = require('sequelize')
const Professional = require('../models/Professional')

module.exports = {
    async create(req, res) {
        const professional = await Professional.create(req.body)

        return res.json(professional)
    },

    async update(req, res) {
        const { professional_id } = req.params

        const {
            photo_url,
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
                    photo_url,
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
    },

    async readAll(req, res) {
        const { offset, limit } = req.query

        try {
            const {count, rows} = await Professional.findAndCountAll({
                offset: offset || 0,
                limit: limit || 10,
                attributes: [
                    'id',
                    'name',
                    'email',
                    'photo_url',
                    'register_number',
                    'cost_level',
                    'observations',
                    [fn('CONCAT_WS', ', ', col('zip_code'), col('address'), col('address_number')), 'full_address']
                ]
            })
            return res.json({
                count,
                data: rows
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json({err})
        }
    },

    async readOne(req, res) {
        const { professional_id } = req.params

        const professional = await Professional.findOne({
            where: {
                id: professional_id
            },
            raw: true
        })

        if(!professional)
            return res.json({})
    
        return res.json(professional)
    },

    async delete(req, res) {
        const { professional_id } = req.params

        try {
            await Professional.destroy({
                where: { id: professional_id }
            })

            return res.json({response: 'Professional deleted successfully'})
        } catch(err) {
            console.log(err)
            return res.status(500).json({err})
        }
    },

    async find(req, res) {
        const { email } = req.body

        const professional = await Professional.findOne({
            where: { email },
            raw: true
        })

        if(!professional)
            return res.json({})
    
        return res.json(professional)
    }
}