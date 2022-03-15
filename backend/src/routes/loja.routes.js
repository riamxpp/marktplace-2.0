const { Router } = require("express");
const routes = new Router();
const LojaController = require("../controllers/LojaController");
const { isAuthenticated } = require("../middleware/isAuthenticated");

routes.post("/cadastrar-loja", LojaController.createLoja);
routes.get("/ver-lojas", LojaController.readAll);
routes.delete("/loja/:id", isAuthenticated, LojaController.deleteLoja);
routes.post("/login-loja", LojaController.loginLoja);
routes.post("/remover-produto", isAuthenticated, LojaController.removerProduto);
routes.post(
  "/pega-produtos-cadastrados", isAuthenticated, 
  LojaController.pegaProdutosCadastrados
);

module.exports = routes;
