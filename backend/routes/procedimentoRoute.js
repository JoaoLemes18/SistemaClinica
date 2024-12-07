// routes/procedimentoRoute.js
const express = require("express");
const {
  getAllProcedimentos,
  createProcedimento,
} = require("../controllers/ProcedimentoController");

const router = express.Router();

router.get("/", getAllProcedimentos);
router.post("/", createProcedimento);

module.exports = router;
