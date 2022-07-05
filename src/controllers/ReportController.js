const Report = require('../models/Report')

module.exports = {
    async create(req, res) {
        try {
            const report = await Report.create(req.body)
            return res.json(report)
        } catch(err) {
            console.log(err)
            return res.status(500).json({err})
        }
    },

    async readAll(req, res) {
        const { attendance_id } = req.params

        try {
            const reports = await Report.findAll({ 
                where: { attendance_id },
                attributes: {
                    exclude: ['attendance_id']
                }
            })
            return res.json(reports)
        } catch(err) {
            console.log(err)
            return res.status(500).json({err})
        }
    }
}