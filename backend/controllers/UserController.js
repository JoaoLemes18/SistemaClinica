const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require("dotenv").config();

const User = require("../models/User");
const Appointment = require("../models/Appointment");

Appointment.sync({ alter: true })
  .then(() => {
    console.log("Modelo sincronizado com o banco de dados");
  })
  .catch((err) => {
    console.error("Erro ao sincronizar modelo:", err);
  });

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    if (users) res.json(users);
    else res.json({ mg: "db vazio" });
  } catch (err) {
    res.json(err);
  }
};

exports.createUser = async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;

  if (!name) return res.status(422).json({ msg: "Required name" });
  if (!email) return res.status(422).json({ msg: "Required email" });
  if (!password) return res.status(422).json({ msg: "Required password" });
  if (password != confirmpassword)
    return res.status(422).json({ msg: "The passwords dont match" });

  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  try {
    await User.create({
      name: name,
      email: email,
      password: passwordHash,
      user_token: "",
    });

    return res.status(201).json({ msg: "User Created" });
  } catch (err) {
    return res.status(500).json({ msg: "Internal Server Error", err });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email) return res.status(422).json({ msg: "Required email" });
  if (!password) return res.status(422).json({ msg: "Required password" });

  // Check User Exist
  try {
    const user = await User.findOne({ where: { email }, raw: true });
    if (!user) return res.status(404).json({ msg: "User not found" });

    const checkPassword = await bcrypt.compareSync(password, user.password);
    if (!checkPassword)
      return res.status(422).json({ msg: "Invalid Password" });

    const secret = process.env.SECRET;
    const token = jwt.sign(
      {
        id: user.id,
      },
      secret,
      { expiresIn: "10h" }
    );

    User.update(
      { token_auth: token },
      {
        where: {
          id: user.id,
        },
      }
    );

    res.status(200).json({ token: token });
  } catch (err) {
    res.status(500).json({ msg: "A error ocurred on server", err });
  }
};

exports.listUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    if (users) res.json(users);
  } catch (err) {
    res.status(500).json({ msg: "A error ocurred on server", err });
  }
};
