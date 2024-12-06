const { DataTypes } = require("sequelize");
const sequelize = require("../db/conn");

const Especialidade = sequelize.define(
  "Especialidade",
  {
    cod_especialidade: {
      type: DataTypes.STRING(20), // Ajuste o tamanho conforme necessário
      primaryKey: true,
      allowNull: false,
      unique: true, // Garante que o código da especialidade seja único
    },
    especialidade: {
      type: DataTypes.STRING(40), // Ajuste o tamanho conforme necessário
      allowNull: false,
      unique: true, // Garantir que o nome da especialidade seja único
    },
  },
  {
    tableName: "especialidade", // Nome da tabela no banco de dados
    timestamps: false, // Desativa as colunas createdAt e updatedAt
  }
);

module.exports = Especialidade;
