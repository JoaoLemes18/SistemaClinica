const express = require("express");
const router = express.Router();
const Especialidade = require("../models/Especialidade"); // Importando o modelo de especialidade

// Rota para listar as especialidades
router.get("/especialidades", async (req, res) => {
  try {
    const especialidades = await Especialidade.findAll();
    res.status(200).json(especialidades); // Retorna as especialidades em formato JSON
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao carregar especialidades." });
  }
});

// Rota para cadastrar uma nova especialidade
router.post("/especialidades", async (req, res) => {
  const { cod_especialidade, especialidade } = req.body;

  if (!cod_especialidade || !especialidade) {
    return res
      .status(400)
      .json({ error: "Por favor, preencha todos os campos." });
  }

  try {
    // Cria a nova especialidade no banco de dados
    const novaEspecialidade = await Especialidade.create({
      cod_especialidade,
      especialidade,
    });
    res.status(201).json(novaEspecialidade); // Retorna a especialidade criada
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao cadastrar especialidade." });
  }
});

module.exports = router;
