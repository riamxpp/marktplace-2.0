const express = require("express");
const session = require("express-session");
const app = express();
const port = 3333;
require("./config/dbConfig");
const routes = require("./routes/routes");
const conexao = require("./config/dbConfig");
conexao();
const cors = require("cors");

app.use(cors({ origin: "*" }));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set("trust proxy", 1);
app.use(
  session({
    secret: "diedwerlwrwekwe21",
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: false,
    },
  })
);

app.use(routes);

app.listen(port, () => {
  console.log("Servidor iniciado");
});
