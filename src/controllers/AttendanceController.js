const Attendance = require('../models/Attendance')
const connection = require('../database')

module.exports = {
    async create(req, res) {
        try {
            const {professional_id, patient_id} = req.body

            const [attendance, created] = await Attendance.findOrCreate({
                where: {
                    professional_id,
                    patient_id
                },
                defaults: {
                    professional_id,
                    patient_id,
                    status: 'pending'
                }
            })

            if(created)
                return res.json(attendance)
            else
                return res.json({message: 'This attendance is already registered'})
        } catch(err) {
            console.log(err)
            return res.status(500).json({err})
        }
    },

    async update(req, res) {
        const { attendance_id } = req.params
        const { status } = req.body

        try {
            const attendance = await Attendance.update(
                { status },
                { where: { id: attendance_id } }
            )

            return res.json(attendance)
        } catch(err) {
            console.log(err)
            return res.status(500).json({err})
        }
    },

    async readAll(req, res) {
        const { patient_id, professional_id } = req.query
        const status = req.query.status?.split(',') || ['pending', 'active']

        try {
            const attendances = await Attendance.findAll({
                where: { 
                    status,
                    ...(patient_id && {patient_id}),
                    ...(professional_id && {professional_id}),
                },
                attributes: {
                    exclude: ['patient_id', 'professional_id']
                },
                include: [
                    { association: 'professional' },
                    { association: 'patient' }
                ]
            })
            return res.json(attendances)
        } catch(err) {
            console.log(err)
            return res.status(500).json({err})
        }
    },

    async readOne(req, res) {
        const { attendance_id } = req.params
        const { add } = req.query

        const attendance = await Attendance.findByPk(
            attendance_id,
            {
                attributes: {
                    exclude: ['patient_id', 'professional_id']
                },
                include: [
                    { association: add }
                ]
            }
        )

        if(!attendance)
            return res.status(400).json({error: 'Attendance not found'})

        return res.json(attendance)
    },

    async count(req, res) {
        try {
            const { source_id, source_type } = req.body
    
            const {count, rows} = await Attendance.findAndCountAll({
                where: {
                    [`${source_type}_id`]: source_id
                }
            })

            let appointmentsCount = 0

            if(rows.length > 0) {
                const ids = rows.map(el => el.id).join(', ')
        
                const [results] = await connection.query(
                    `SELECT COUNT(id) FROM appointments WHERE attendance_id IN (${ids})`,
                    {
                        raw: true
                    }
                )

                appointmentsCount = parseInt(results[0].count)
            }

            return res.json({
                attendances_count: count,
                appointments_count: appointmentsCount
            })
        } catch(err) {
            console.log(err)
            return res.status(500).json({err})
        }
    }
}