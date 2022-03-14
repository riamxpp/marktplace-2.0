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
      "woeprwe90324",
      {
        expiresIn: 3600,
      }
    );
    req.session.usuarioLogado = true;
    const dadosUsuario = {
      idUser: usuarioDados._id,
      nome: usuarioDados.nome,
      email: usuarioDados.email,
      cpf: usuarioDados.cpf,
      cidade: usuarioDados.cidade,
    };
    req.session.dadosUsuario = dadosUsuario;
    return res.json({ dadosUsuario, logado: true, token });
  }
  return res.json({ error: "Usuario não encontrado" });
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
  dadosPrev.carrinho.map((item) => (total += item.preco));
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
};
