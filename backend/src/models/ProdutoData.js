const mongoose = require("mongoose");

const ProdutoData = new mongoose.Schema({
  idLoja: String,
  emailLoja: String,
  nome: String,
  preco: Number,
  cor: {
    cor: String,
    required: false,
  },
  categoria: String,
  marca: {
    marca: String,
    required: false,
  },
  tamanho: {
    tamanho: String,
    required: false,
  },
});

module.exports = mongoose.model("Produto", ProdutoData);
