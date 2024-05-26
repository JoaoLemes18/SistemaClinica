const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("clinicasistema", "root", "36416461", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
