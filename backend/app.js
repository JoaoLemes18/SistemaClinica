const express = require("express");
const conn = require("./db/conn");
const app = express();
const cors = require("cors");

const profissionalRoute = require("./routes/profissionalRoute");
const especialidadeRoute = require("./routes/especialidadeRoute"); // Importando a rota de especialidade
const procedimentoRoute = require("./routes/procedimentoRoute"); // Corrigindo a importação para procedimentoRoute

const Profissional = require("./models/Profissional");
const Especialidade = require("./models/Especialidade"); // Importando o modelo de especialidade
const Procedimento = require("./models/Procedimento"); // Se necessário, importar o modelo de Procedimento

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Usando as rotas
app.use(profissionalRoute);
app.use("/procedimentos", procedimentoRoute); // Corrigindo a rota de procedimentos
app.use(especialidadeRoute); // Usando as rotas de especialidade

conn
  .sync({ force: false })
  .then(() => {
    console.log("Banco de dados sincronizado");
    app.listen(3000, () => {
      console.log("Server Running on port 3000");
    });
  })
  .catch((err) => {
    console.error("Erro na conexão com o banco de dados", err);
  });
