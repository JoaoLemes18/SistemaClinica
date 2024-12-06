'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('procedimento', {
      cod_proced: {
        type: Sequelize.INTEGER(5),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      descr_proced: {
        type: Sequelize.STRING(100),
        allowNull: false,
      },
      val_proced: {
        type: Sequelize.DECIMAL(7, 2),
        allowNull: false,
      },
    });
  },


  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('procedimento');

  }
};
