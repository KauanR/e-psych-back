'use strict'

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('reports', { 
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
            description: {
                type: Sequelize.STRING,
                allowNull: false
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
        await queryInterface.dropTable('reports')
    }
}
