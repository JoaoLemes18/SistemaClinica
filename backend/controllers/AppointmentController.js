const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const User = require("../models/User");
const Appointment = require("../models/Appointment");

exports.listAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.findAll({
      include: [
        {
          model: User,
          attributes: ["id", "name", "email"],
        },
      ],
    });
    res.status(200).json(appointments);
  } catch (err) {
    res.status(500).json({ msg: "A error ocurred on server", err });
  }
};

exports.createAppointment = async (req, res) => {
  const { hour } = req.body;

  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Token não fornecido" });

  try {
    const secret = process.env.SECRET;
    const decodedToken = jwt.verify(token, secret);
    const userId = decodedToken.id;

    await Appointment.create({
      id_user: userId,
      hour: hour,
    });

    return res.status(201).json({ msg: "Appointment Created" });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error", err });
  }
};
