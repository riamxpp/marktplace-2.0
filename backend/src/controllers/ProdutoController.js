const Produto = require("../models/ProdutoData");
const Loja = require("../models/LojaData");

const verProdutos = async (req, res) => {
  const allProducts = await Produto.find();

  return res.json(allProducts);
};

const quantidadeProdutos = async (req, res, id) => {
  const produtos = await Produto.findById(id);

  return res.json(produtos);
};

const cadastroProduto = async (req, res) => {
  const { nome, preco, categoria, tamanho } = req.body;
  console.log("produtoController: ", req.session.dadosLoja);
  if (req.session.lojaLogado) {
    const produto = await Produto.create({
      idLoja: req.session.lojaLogado.idLoja,
      emailLoja: req.session.lojaLogado.emailLoja,
      nome,
      preco,
      categoria,
      tamanho,
    });
    return res.json(produto);
  }

  return res.json({ error: "Nenhuma loja logado" });
};

module.exports = { verProdutos, cadastroProduto };
