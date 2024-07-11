const { DataTypes } = require("sequelize");
const sequelize = require("../db/conn");

const Profissional = sequelize.define(
  "Profissional",
  {
    cod_prof: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
      unique: true,
    },
    nome_prof: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    tipo_prof: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isIn: [[1, 2, 3, 4]],
      },
    },
    status_prof: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isIn: [[1, 2, 3]],
      },
    },
    senha_prof: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cod_espec: {
      type: DataTypes.STRING, // Alterei para STRING conforme mencionado
      allowNull: false,
    },
  },
  {
    tableName: "profissional",
  }
);

module.exports = Profissional;
