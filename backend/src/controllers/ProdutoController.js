const Produto = require("../models/ProdutoData");
const Loja = require("../models/LojaData");

const cadastroProduto = async (req, res) => {
  const {
    idLoja,
    nome,
    preco,
    categoria,
    marca,
    informacoesProduto,
    tamanho,
    estoque,
  } = req.body;
  // if (req.session.lojaLogado) {
  const produto = await Produto.create({
    idLoja,
    nome,
    preco,
    categoria,
    marca,
    informacoesProduto,
    tamanho,
    estoque,
  });
  return res.json(produto);
  // }

  // return res.json({ error: "Nenhuma loja logado" });
};

const verProdutos = async (req, res) => {
  const allProducts = await Produto.find();
  return res.json(allProducts);
};

const quantidadeProdutos = async (req, res, id) => {
  const produtos = await Produto.findById(id);

  return res.json(produtos);
};

const pegaProdutoCategoria = async (req, res) => {
  const categoria = req.body.categoria;
  const dados = await Produto.find({ categoria: categoria });
  if (!dados) {
    return res.status({ error: "Algo deu errado" });
  }

  return res.json(dados);
};

module.exports = {
  verProdutos,
  cadastroProduto,
  pegaProdutoCategoria,
};
