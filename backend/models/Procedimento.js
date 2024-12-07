// models/Procedimento.js
const { DataTypes } = require("sequelize");
const sequelize = require("../db/conn"); // A conexão com o banco de dados

const Procedimento = sequelize.define(
  "Procedimento",
  {
    cod_proced: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    descr_proced: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    val_proced: {
      type: DataTypes.DECIMAL(7, 2),
      allowNull: false,
    },
    cod_espec: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
  },
  {
    tableName: "procedimento", // Nome da tabela no banco ajustado
    timestamps: false,
  }
);

module.exports = Procedimento;
