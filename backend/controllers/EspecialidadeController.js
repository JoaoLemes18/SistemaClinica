// controllers/EspecialidadeController.js
const { Especialidade } = require("../models/Especialidade");

exports.cadastrarEspecialidade = async (req, res) => {
  const { cod_especialidade, especialidade } = req.body;

  try {
    // Verifica se a especialidade já existe
    const especialidadeExistente = await Especialidade.findOne({
      where: { cod_especialidade },
    });

    if (especialidadeExistente) {
      return res.status(400).json({ message: "Especialidade já cadastrada" });
    }

    // Cria uma nova especialidade
    const novaEspecialidade = await Especialidade.create({
      cod_especialidade,
      especialidade,
    });

    return res.status(201).json(novaEspecialidade);
  } catch (error) {
    console.error("Erro ao cadastrar especialidade:", error);
    return res.status(500).json({ message: "Erro ao cadastrar especialidade" });
  }
};
