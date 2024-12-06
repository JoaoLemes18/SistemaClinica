'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('especialidade', {
      cod_especialidade: {
        type: Sequelize.STRING(20), // varchar(20), pode ser ajustado conforme necessário
        primaryKey: true,
        allowNull: false, // Não pode ser nulo
      },
      especialidade: {
        type: Sequelize.STRING(40), // varchar(40), pode ser ajustado conforme necessário
        allowNull: false,  // Não pode ser nulo
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('especialidade');
  }
};