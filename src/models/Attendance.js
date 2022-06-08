const { Model, DataTypes } = require('sequelize')
const Patient = require('./Patient')
const Professional = require('./Professional')

class Attendance extends Model {
    static init(sequelize) {
        super.init({
            professional_id: {
                type: DataTypes.NUMBER,
                allowNull: false,
                references: {
                    model: Professional,
                    key: 'id'
                }
            },
            patient_id: {
                type: DataTypes.NUMBER,
                allowNull: false,
                references: {
                    model: Patient,
                    key: 'id'
                }
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    isIn: [['pending', 'active', 'inactive', 'rejected']]
                }
            }
        }, {
            sequelize,
            tableName: 'attendances'
        })
    }

    static associate(models) {
        this.belongsTo(models.Professional, {foreignKey: 'professional_id', as: 'professional'})
        this.belongsTo(models.Patient, {foreignKey: 'patient_id', as: 'patient'})

        this.hasMany(models.Appointment, {foreignKey: 'attendance_id', as: 'appointments'})
        this.hasMany(models.Report, {foreignKey: 'attendance_id', as: 'reports'})
    }
}

module.exports = Attendance