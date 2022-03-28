const mongoose = require("mongoose");

const LojaDataSchema = new mongoose.Schema({
  nome: String,
  email: {
    unique: true,
    type: String,
  },
  senha: String,
  cidade: String,
  rua: String,
  numero: Number,
  bairro: String,
  cnpj: String,
  produtos: Array,
  quantidadeProdutos: Number,
});

module.exports = mongoose.model("loja", LojaDataSchema);
