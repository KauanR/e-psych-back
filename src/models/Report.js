const { Model, DataTypes } = require('sequelize')

class Report extends Model {
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
            description: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'reports'
        })
    }

    static associate(models) {
        this.belongsTo(models.Attendance, {foreignKey: 'attendance_id', as: 'attendance'})
    }
}

module.exports = Report