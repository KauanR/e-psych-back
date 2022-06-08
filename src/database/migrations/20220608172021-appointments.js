'use strict'

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('appointments', { 
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            attendance_id: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'attendances',
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            },
            date: {
                type: Sequelize.DATE,
                allowNull: false
            },
            annotations: {
                type: Sequelize.STRING,
                allowNull: true
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
        await queryInterface.dropTable('appointments')
    }
}
