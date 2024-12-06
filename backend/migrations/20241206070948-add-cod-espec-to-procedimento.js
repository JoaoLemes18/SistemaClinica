"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("procedimento", "cod_espec", {
      type: Sequelize.STRING(20),
      allowNull: false,
    });
    // Adicionando a chave estrangeira
    await queryInterface.addConstraint("procedimento", {
      fields: ["cod_espec"], // Nome do campo na tabela procedimento
      type: "foreign key",
      name: "fk_procedimento_especialidade", // Nome da constraint
      references: {
        table: "especialidade", // Tabela que a chave estrangeira referencia
        field: "cod_especialidade", // Chave primária na tabela especialidade
      },
      onUpdate: "CASCADE",
      onDelete: "RESTRICT", // Defina a ação que você quer para deletar
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "procedimento",
      "fk_procedimento_especialidade"
    );

    // Remover a coluna cod_espec
    await queryInterface.removeColumn("procedimento", "cod_espec");
  },
};
