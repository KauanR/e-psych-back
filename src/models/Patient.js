const { Model, DataTypes } = require('sequelize')

class Patient extends Model {
    static init(sequelize) {
        super.init({
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                unique: true,
                allowNull: false
            },
            phone_number: {
                type: DataTypes.STRING,
                allowNull: true
            },
            photo_url: {
                type: DataTypes.STRING,
                allowNull: true
            },
            zip_code: {
                type: DataTypes.STRING,
                allowNull: false
            },
            address: {
                type: DataTypes.STRING,
                allowNull: false
            },
            address_number: {
                type: DataTypes.STRING,
                allowNull: false
            }
        }, {
            sequelize,
            tableName: 'patients'
        })
    }

    static associate(models) {
        this.hasMany(models.Attendance, {foreignKey: 'patient_id', as: 'attendances'})
    }
}

module.exports = Patient