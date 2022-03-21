const Cliente = require("../models/ClienteData");
const { sign } = require("jsonwebtoken");

const loginCliente = async (req, res) => {
  const { email, senha } = req.body;
  const usuarioDados = await Cliente.findOne({
    email,
    senha,
  });

  if (usuarioDados) {
    const token = sign(
      {
        _id: usuarioDados._id,
        nome: usuarioDados.nome,
        email: usuarioDados.email,
        cidade: usuarioDados.cidade,
      },
      "43543jsdwef",
      {
        expiresIn: 3600,
      }
    );
    const dadosUsuario = {
      idUser: usuarioDados._id,
      nome: usuarioDados.nome,
      email: usuarioDados.email,
      cidade: usuarioDados.cidade,
      token,
    };
    req.session.dadosUsuario = dadosUsuario;
    return res.json({ dadosUsuario });
  }
  return res.status(401).json({ error: "Usuário não encontrado" });
};

const takeEmail = async (req, res) => {
  const emailParaCadastrar = await Cliente.findOne({ email: req });
  if (!emailParaCadastrar) return true;
  return false;
};

const readOneCliente = async (req, res) => {
  const { id } = req.body;
  const clienteList = await Cliente.findOne({ _id: id });
  return res.json(clienteList);
};

const readAllCliente = async (req, res) => {
  const clientList = await Cliente.find();
  return res.json(clientList);
};

const cadastrarCliente = async (req, res) => {
  const { nome, email, senha, cpf, cidade } = req.body;
  const verifEmail = await takeEmail(email);

  if (!verifEmail) return res.status(400).json({ erro: "Email já cadastrado" });
  if (!nome || !email || !senha || !cpf || !cidade)
    return res.status(400).json({ erro: "Valor inválido" });

  const clienteCreate = await Cliente.create({
    nome,
    email,
    senha,
    cpf,
    cidade,
    compras: [],
    carrinho: [],
  });

  return res.json(clienteCreate);
};

const retornaUmUsuario = async (_id) => {
  const dados = await Cliente.findById(_id);
  if (dados) return dados;

  return { error: "Algo deu errado" };
};

const AdicionarAoCarrinho = async (req, res) => {
  const {
    _id,
    idProduto,
    nome,
    categoria,
    preco,
    marca,
    informacoesProduto,
    estoque,
  } = req.body;
  const dadosPrev = await retornaUmUsuario(_id);
  const dados = await Cliente.updateOne(
    { _id },
    {
      $set: {
        carrinho: [
          ...dadosPrev.carrinho,
          {
            idProduto,
            nome,
            categoria,
            preco,
            marca,
            informacoesProduto,
            estoque,
          },
        ],
      },
    }
  );
  if (dados) return res.json(dados);
  return res.status(400).json({ error: "Algo deu errado" });
};

const pegaProdutosCarrinho = async (req, res) => {
  const { _id } = req.body;
  const dados = await Cliente.findById(_id);
  if (dados) return res.json(dados);
  return res.status(400).json({ error: "Algo deu errado" });
};

const somaTotalCarrinho = async (req, res) => {
  const { _id } = req.body;
  const dadosPrev = await retornaUmUsuario(_id);
  let total = 0;
  dadosPrev.carrinho.map((item) => (total += +item.preco));
  return res.json(total);
};

const removeItemCarrinho = async (req, res) => {
  const { carrinhoProduto, _id } = req.body;

  await Cliente.updateOne(
    { _id },
    {
      $set: {
        carrinho: [...carrinhoProduto],
      },
    }
  );
};

const tokenUser = (req, res) => {
  if (req.session.dadosUsuario.token)
    return res.json(req.session.dadosUsuario.token);
  return res.status(400).json({ error: "Faça login" });
};

module.exports = {
  loginCliente,
  readOneCliente,
  cadastrarCliente,
  readAllCliente,
  AdicionarAoCarrinho,
  retornaUmUsuario,
  pegaProdutosCarrinho,
  somaTotalCarrinho,
  removeItemCarrinho,
  tokenUser,
};
