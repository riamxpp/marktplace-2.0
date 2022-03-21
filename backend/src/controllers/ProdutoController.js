const Produto = require("../models/ProdutoData");
const Loja = require("../models/LojaData");

const cadastroProduto = async (req, res) => {
  const {
    idLoja,
    nomeLoja,
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
    nomeLoja,
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

const pegaPrecoProduto = async (req, res) => {
  const { idProduto } = req.body;
  const dados = await Produto.findById(idProduto);
  if (!dados) {
    return res.status(401).json({ Error: "Produto não encontrado!" });
  }
  return res.json(dados.preco);
};

const pegaEstoqueProduto = async (req, res) => {
  const { idProduto } = req.body;
  const dados = await Produto.findById(idProduto);
  if (!dados) {
    return res.status(401).json({ Error: "Produto não encontrado!" });
  }
  return res.json(dados.estoque);
};

module.exports = {
  verProdutos,
  cadastroProduto,
  pegaProdutoCategoria,
  pegaPrecoProduto,
  pegaEstoqueProduto,
};
