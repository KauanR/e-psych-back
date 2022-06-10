const Professional = require('../models/Professional')

module.exports = {
    async create(req, res) {
        const professional = await Professional.create(req.body)

        return res.json(professional)
    }
}