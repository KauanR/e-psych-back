const { Model, DataTypes } = require('sequelize')

class Appointment extends Model {
    static init(sequelize) {
        super.init({
            attendance_id: {
                type: DataTypes.NUMBER,
                allowNull: false,
                references: {
                    model: 'attendance',
                    key: 'id'
                }
            },
            date: {
                type: DataTypes.DATE,
                allowNull: false
            },
            annotations: {
                type: DataTypes.STRING,
                allowNull: true
            }
        }, {
            sequelize,
            tableName: 'appointments'
        })
    }

    static associate(models) {
        this.belongsTo(models.Attendance, {foreignKey: 'attendance_id', as: 'attendance'})
    }
}

module.exports = Appointment