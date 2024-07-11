const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Profissional = require("../models/Profissional");

exports.getAllUsers = async (req, res) => {
  try {
    const profissional = await Profissional.findAll();
    if (profissional) res.json(profissional);
    else res.json({ msg: "DB vazio" });
  } catch (err) {
    res.status(500).json({ msg: "Erro no servidor", err });
  }
};

exports.createUser = async (req, res) => {
  const { cod_prof, nome_prof, tipo_prof, status_prof, senha_prof, cod_espec } =
    req.body;

  if (
    !cod_prof ||
    !nome_prof ||
    !tipo_prof ||
    !status_prof ||
    !senha_prof ||
    !cod_espec
  )
    return res.status(422).json({ msg: "Os dados não estão completos" });

  const salt = await bcrypt.genSalt(12);
  const senhaComHash = await bcrypt.hash(senha_prof, salt);

  try {
    const verificaUsuarioCadastrado = await Profissional.findOne({
      where: { cod_prof },
      raw: true,
    });

    if (verificaUsuarioCadastrado)
      return res.status(422).json({ msg: "Código de usuário já existe" });

    await Profissional.create({
      cod_prof,
      nome_prof,
      tipo_prof,
      status_prof,
      senha_prof: senhaComHash,
      cod_espec,
    });

    return res.status(201).json({ msg: "Usuário cadastrado" });
  } catch (err) {
    return res.status(500).json({ msg: "Erro no servidor", err });
  }
};

exports.loginUser = async (req, res) => {
  const { cod_prof, senha_prof } = req.body;

  if (!cod_prof) return res.status(422).json({ msg: "Código requerido" });
  if (!senha_prof) return res.status(422).json({ msg: "Senha requerida" });

  try {
    const profissional = await Profissional.findOne({
      where: { cod_prof },
      raw: true,
    });
    if (!profissional)
      return res.status(404).json({ msg: "Usuário não encontrado" });

    const checkPassword = await bcrypt.compare(
      senha_prof,
      profissional.senha_prof
    );
    if (!checkPassword) return res.status(422).json({ msg: "Senha inválida" });

    const secret = "fasipe123";
    const token = jwt.sign({ cod_prof: profissional.cod_prof }, secret, {
      expiresIn: "10h",
    });

    res.status(200).json({
      msg: "Login realizado",
      cod_prof: profissional.cod_prof,
      nome_prof: profissional.nome_prof,
      tipo_prof: profissional.tipo_prof,
      status_prof: profissional.status_prof,
      cod_espec: profissional.cod_espec, // Inclui cod_espec na resposta de login
      token,
    });
  } catch (err) {
    res.status(500).json({ msg: "Erro no servidor", err });
  }
};
