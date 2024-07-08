const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Profissional = require("../models/profissional");

exports.getAllUsers = async (req, res) => {
  try {
    const profissional = await Profissional.findAll();
    if (profissional) res.json(profissional);
    else res.json({ mg: "db vazio" });
  } catch (err) {
    res.json(err);
  }
};

exports.createUser = async (req, res) => {
  const { nome_prof, tipo_prof, status_prof, senha_prof } = req.body;

  if (!nome_prof || !tipo_prof || !status_prof || !senha_prof)
    return res.status(422).json({ msg: "Os Dados Não Estão Completos" });

  const salt = await bcrypt.genSalt(12);
  const senhaComHash = await bcrypt.hash(senha_prof, salt);

  try {
    const verificaUsuarioCadastrado = await Profissional.findOne({
      where: { nome_prof },
      raw: true,
    });

    if (verificaUsuarioCadastrado)
      return res.status(422).json({ msg: "Nome de Usuario Já Existe" });

    await Profissional.create({
      nome_prof,
      tipo_prof,
      status_prof,
      senha_prof: senhaComHash,
    });

    return res.status(201).json({ msg: "Usuário Cadastrado" });
  } catch (err) {
    return res.status(500).json({ msg: "Erro No Servidor", err });
  }
};

exports.loginUser = async (req, res) => {
  const { nome_prof, senha_prof } = req.body;

  if (!nome_prof) return res.status(422).json({ msg: "Nome Requerido" });
  if (!senha_prof) return res.status(422).json({ msg: "Senha Requerida" });

  // Check User Exist
  try {
    const profissional = await Profissional.findOne({
      where: { nome_prof },
      raw: true,
    });
    if (!profissional)
      return res.status(404).json({ msg: "Usuário Não Encontrado" });

    const checkPassword = await bcrypt.compareSync(
      senha_prof,
      profissional.senha_prof
    );
    if (!checkPassword) return res.status(422).json({ msg: "Senha Invalida" });

    const secret = "fasipe123";
    const token = jwt.sign(
      {
        cod_prof: profissional.cod_prof,
      },
      secret,
      { expiresIn: "10h" }
    );

    res
      .status(200)
      .json({ msg: "Login Realizado", cod: profissional.cod_prof });
  } catch (err) {
    res.status(500).json({ msg: "Erro No Servidor" });
  }
};
