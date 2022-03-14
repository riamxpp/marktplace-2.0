const Loja = require("../models/LojaData");
const Produto = require("../models/ProdutoData");

const loginLoja = async (req, res) => {
  const { email, senha } = req.body;
  const data = await Loja.findOne({
    email,
    senha,
  });

  if (data) {
    req.session.lojaLogado = true;
    let dadosLoja = {
      idLoja: data._id,
      email: data.email,
      nome: data.nome,
      cidade: data.cidade,
      quantidadeProdutos: data.quantidadeProdutos,
      cnpj: data.cnpj,
      produtos: data.produtos,
    };
    req.session.dadosLoja = dadosLoja;

    return res.json(dadosLoja);
  }
  return res.json({ error: "Loja não encontrada" });
};

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

const pegaProdutosCadastrados = async (req, res) => {
  const { idLoja } = req.body;

  const dados = await Produto.find({ idLoja });

  return res.json(dados);
};

const removerProduto = async (req, res) => {
  const { idLoja, idProduto } = req.body;
  let idEncontrado = [];

  const dados = await Produto.find({ idLoja });
  dados.forEach((item) => {
    if (item._id.toString().replace('new ObjectId("') === idProduto) {
      idEncontrado.push(item._id.toString().replace('new ObjectId("'));
    }
  });

  const deletado = await Produto.findByIdAndDelete(idEncontrado[0]);
  if (deletado) return res.json({ removido: "Produto removido com sucesso." });

  return res.status(404).json({ error: "Algo deu errado." });
};

module.exports = {
  loginLoja,
  readAll,
  createLoja,
  deleteLoja,
  removerProduto,
  pegaProdutosCadastrados,
};
