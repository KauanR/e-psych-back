const Attendance = require('../models/Attendance')
const connection = require('../database')

module.exports = {
    async create(req, res) {
        try {
            const attendance = await Attendance.create(req.body)
            return res.json(attendance)
        } catch(err) {
            console.log(err)
            return res.status(500).json({err})
        }
    },

    async count(req, res) {
        try {
            const { source_id, source_type } = req.body
    
            const {count, rows} = await Attendance.findAndCountAll({
                where: {
                    [`${source_type}_id`]: source_id
                }
            })
    
            const ids = rows.map(el => el.id).join(', ')
    
            console.log(ids)
    
            const [results] = await connection.query(
                `SELECT COUNT(id) FROM appointments WHERE attendance_id IN (${ids})`,
                {
                    raw: true
                }
            )
    
            return res.json({
                attendances_count: count,
                appointments_count: parseInt(results[0].count)
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json({err})
        }
    }
}