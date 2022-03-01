const Produto = require("../models/ProdutoData");

const verProdutos = async (req, res) => {
  const allProducts = await Produto.find();

  return res.json(allProducts);
};

const quantidadeProdutos = async (req, res, id) => {
  const produtos = await Produto.findById(id);

  return res.json(produtos);
};

// const cadastroProduto = async (req, res) => {};

module.exports = { verProdutos };
