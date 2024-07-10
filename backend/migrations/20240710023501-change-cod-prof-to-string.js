"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("profissional", "cod_prof", {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("profissional", "cod_prof", {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    });
  },
};
