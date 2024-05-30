const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("fasipe", "root", "36416461", {
  host: "localhost",
  dialect: "mysql",
  dialectOptions: {
    ssl: false,
  },
});

module.exports = sequelize;
