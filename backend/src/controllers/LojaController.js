const Loja = require("../models/LojaData");
const Produto = require("../models/ProdutoData");

const takeEmail = async (email) => {
  const emailParaCadastrar = await Loja.findOne({ email: email });
  if (!emailParaCadastrar) return true;
  return false;
};

const readAll = async (req, res) => {
  const lojas = await Loja.find();

  return res.json(lojas);
};

const createLoja = async (req, res) => {
  const { nome, cidade, cnpj, email, senha, rua, bairro, numero } = req.body;
  console.log(req.body);
  const verifEmail = await takeEmail(email);

  if (
    !nome ||
    !cidade ||
    !cnpj ||
    !email ||
    !senha ||
    !rua ||
    !bairro ||
    !numero
  ) {
    return res.status(400).json({ erro: "Dados inválidos!" });
  }
  if (!verifEmail) return res.status(400).json({ erro: "Email já cadastrado" });

  const lojaCreate = await Loja.create({
    nome,
    email,
    senha,
    cidade,
    rua,
    numero,
    bairro,
    produtos: [],
    cnpj,
    quantidadeProdutos: 0,
  });

  console.log(lojaCreate);
  return res.json(lojaCreate);
};

const deleteLoja = async (req, res) => {
  const { id } = req.params;

  const lojaDelete = await Loja.findOneAndDelete({ _id: id });

  if (lojaDelete) {
    return res.json(lojaDelete);
  }
  return res.status(400).json({ erro: "Algo deu errado!" });
};

const CadastrarProduto = (req, res) => {};

module.exports = { readAll, createLoja, deleteLoja };
