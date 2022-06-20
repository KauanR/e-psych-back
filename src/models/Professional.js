const { Model, DataTypes } = require('sequelize')

class Professional extends Model {
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
            register_number: {
                type: DataTypes.STRING,
                allowNull: false
            },
            cost_level: {
                type: DataTypes.INTEGER,
                allowNull: false,
                validate: {
                    min: 1,
                    max: 5
                }
            },
            observations: {
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
            tableName: 'professionals'
        })
    }

    static associate(models) {
        this.hasMany(models.Attendance, {foreignKey: 'professional_id', as: 'attendances'})
    }
}

module.exports = Professional