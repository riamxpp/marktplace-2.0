const mongoose = require("mongoose");

const ProdutoData = new mongoose.Schema({
  idLoja: String,
  emailLoja: String,
  nome: String,
  preco: Number,
  categoria: String,
  marca: {
    marca: String,
    required: false,
  },
  informacoesProduto: String,
  tamanho: {
    tamanho: String,
    required: false,
  },
  estoque: Number,
});

module.exports = mongoose.model("Produto", ProdutoData);
