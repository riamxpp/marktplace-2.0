const Cliente = require("../models/ClienteData");

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
  res.json(clientList);
};

const cadastrarCliente = async (req, res) => {
  console.log(req.body);
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
  });

  return res.json(clienteCreate);
};

module.exports = {
  readOneCliente,
  cadastrarCliente,
  readAllCliente,
};
