const { DataTypes } = require("sequelize");
const sequelize = require("../db/conn");

const User = require("./User");

const Appointment = sequelize.define("Appointment", {
  id_appointment: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },

  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  hour: {
    type: DataTypes.TIME,
    allowNull: false,
  },
});

User.hasOne(Appointment, { foreignKey: "id_user" });
Appointment.belongsTo(User, { foreignKey: "id_user" });

module.exports = Appointment;
