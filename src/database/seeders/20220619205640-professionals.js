'use strict'

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('professionals', [
            {
                name: 'Jorge Da Silva',
                email: 'jorge.silva@teste.com.br',
                photo_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                phone_number: '(54) 99999-9999',
                register_number: '135798642',
                cost_level: 3,
                observations: 'Sou especializado em psicologia educacional, com mais de 7 anos de atuação no mercado',
                zip_code: '99700-010',
                address: 'Praça da Bandeira',
                address_number: '354',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            },
            {
                name: 'Laura Almeida',
                email: 'laura.almeida@teste.com.br',
                photo_url: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                phone_number: '(54) 88888-8888',
                register_number: '9876543210',
                cost_level: 4,
                observations: 'Trabalho à 12 anos, focada em psicologia organizacional/empresarial',
                zip_code: '99709-910',
                address: 'Av. Sete de Setembro',
                address_number: '1621',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            },
            {
                name: 'Andre Rocha',
                email: 'andre.rocha@teste.com.br',
                photo_url: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
                phone_number: '(54) 77777-7777',
                register_number: '1234567890',
                cost_level: 5,
                observations: 'Atuo dentro da psicologia jurídica, ajudo principalmente no estudo e entendimento de fenômenos psicológicos relacionados à saúde mental e distúrbios de personalidade que podem levar uma pessoa a cometer crimes ou infrações à lei',
                zip_code: '99700-000',
                address: 'Rua Alemanha',
                address_number: '985',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            },
            {
                name: 'Thais Matos',
                email: 'thais.matos@teste.com.br',
                photo_url: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
                phone_number: '(54) 66666-6666',
                register_number: '10293847576',
                cost_level: 2,
                observations: '',
                zip_code: '99700-000',
                address: 'Av. Sete de Setembro',
                address_number: '111',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            },
            {
                name: 'Bruno Buscapé',
                email: 'bruno.buscape@teste.com.br',
                photo_url: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
                phone_number: '(54) 55555-5555',
                register_number: '1132446577',
                cost_level: 4,
                observations: '',
                zip_code: '99700-284',
                address: 'Rua Pernanbuco',
                address_number: '461',
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            }
        ], {})
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('professionals', null, {});
    }
}
