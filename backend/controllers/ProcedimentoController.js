// controllers/procedimentoController.js
const Procedimento = require("../models/Procedimento");

// Obter todos os procedimentos
const getAllProcedimentos = async (req, res) => {
  try {
    const procedimentos = await Procedimento.findAll();
    res.status(200).json(procedimentos);
  } catch (error) {
    res.status(500).json({ error: "Erro ao buscar procedimentos." });
  }
};

// Criar um novo procedimento
const createProcedimento = async (req, res) => {
  const { descr_proced, val_proced, cod_espec } = req.body;

  try {
    const procedimento = await Procedimento.create({
      descr_proced,
      val_proced,
      cod_espec,
    });
    res.status(201).json(procedimento);
  } catch (error) {
    res.status(500).json({ error: "Erro ao criar procedimento." });
  }
};

// Exporta as funções
module.exports = { getAllProcedimentos, createProcedimento };
