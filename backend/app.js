const express = require("express");
const conn = require("./db/conn");
const app = express();
const cors = require("cors");

const profissionalRoute = require("./routes/profissionalRoute");

const Profissional = require("./models/profissional");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(profissionalRoute);

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
