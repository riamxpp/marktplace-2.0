const { Router } = require("express");
const routes = new Router();
const {
  cadastrarCliente,
  readAllCliente,
  AdicionarAoCarrinho,
  loginCliente,
  pegaProdutosCarrinho,
  somaTotalCarrinho,
  removeItemCarrinho,
  tokenUser,
} = require("../controllers/ClienteController");
const { isAuthenticated } = require("../middleware/isAuthenticated");

routes.post("/cadastro-cliente", cadastrarCliente);
routes.get("/todos-clientes", readAllCliente);
routes.put("/adicionar-ao-carrinho", isAuthenticated, AdicionarAoCarrinho);
routes.post("/login-cliente", loginCliente);
routes.post("/pega-carrinho-cliente", isAuthenticated, pegaProdutosCarrinho);
routes.post("/total-carrinho", isAuthenticated, somaTotalCarrinho);
routes.post("/remove-do-carrinho", isAuthenticated, removeItemCarrinho);
routes.get("/verifica-token", tokenUser);

module.exports = routes;
