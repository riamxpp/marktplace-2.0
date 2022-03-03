const { Router } = require("express");
const routes = new Router();

const HomeController = require("../controllers/HomeController");
const LojaController = require("../controllers/LojaController");
const ClienteController = require("../controllers/ClienteController");
const ProdutoController = require("../controllers/ProdutoController");
const LoginClienteController = require("../controllers/LoginClienteController");
const LoginLojaController = require("../controllers/LoginLojaController");

routes.get("/", HomeController.hello);

routes.post("/cadastrar-loja", LojaController.createLoja);
routes.get("/ver-lojas", LojaController.readAll);
routes.delete("/loja/:id", LojaController.deleteLoja);

routes.post("/cadastro-cliente", ClienteController.cadastrarCliente);
routes.get("/todos-clientes", ClienteController.readAllCliente);

routes.get("/meus-produtos", ProdutoController.verProdutos);
routes.post("/cadastrar-produto", ProdutoController.cadastroProduto);

routes.post("/login-cliente", LoginClienteController.loginCliente);
// routes.post("/logout-cliente", LoginClienteController.logoutCliente);
routes.get("/status-login-cliente", LoginClienteController.statusLoginCliente);

routes.post("/login-loja", LoginLojaController.loginLoja);
routes.get("/status-login-cliente", LoginLojaController.statusLoginLoja);

module.exports = routes;
