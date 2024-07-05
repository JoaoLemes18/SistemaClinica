const { DataTypes } = require("sequelize");
const sequelize = require("../db/conn");

const Profissional = sequelize.define(
  "Profissional",
  {
    cod_prof: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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

    // sup_prof (ID DO SUPERVISOR DO PROFISSIONAL) FOREING KEY

    status_prof: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isIn: [[1, 2, 3]],
      },
    },

    // cons_prof (Conselho do profissional) FOREING KEY

    senha_prof: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "profissional",
  }
);

// sequelize.sync({ force: true })
//     .then(() => {
//         console.log('Tabela Profissional criada com sucesso.');
//     })
//     .catch(error => {
//         console.error('Erro ao criar a tabela Profissional:', error);
//     });

module.exports = Profissional;
