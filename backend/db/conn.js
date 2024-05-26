const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("vinnisbarber", "root", "36416461", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
