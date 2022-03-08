const mongoose = require("mongoose");

const ClienteData = new mongoose.Schema({
  nome: String,
  email: String,
  senha: String,
  cpf: String,
  cidade: String,
  compras: Array,
  carrinho: Array,
});

module.exports = mongoose.model("Usuário", ClienteData);
