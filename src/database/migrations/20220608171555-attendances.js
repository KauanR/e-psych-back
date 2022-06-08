'use strict'

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('attendances', { 
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            professional_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'professionals',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            patient_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'patients',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            status: {
                type: Sequelize.STRING,
                allowNull: false,
                isIn: [['pending', 'active', 'inactive', 'rejected']]
            },
            created_at: {
                type: Sequelize.DATE,
                allowNull: false
            },
            updated_at: {
                type: Sequelize.DATE,
                allowNull: false
            }
        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('attendances')
    }
}
