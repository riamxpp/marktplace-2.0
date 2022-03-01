const mongoose = require("mongoose");

const linkConexao =
  "mongodb+srv://riamxp:12342452@cluster0.ubuqf.mongodb.net/sistema?retryWrites=true&w=majority";

const connection = () =>
  mongoose
    .connect(linkConexao, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDb conectado!"))
    .catch((err) => console.log("Erro: ", err));

module.exports = connection;
