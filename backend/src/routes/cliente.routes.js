const { Router } = require("express");
const routes = new Router();
const ClienteController = require("../controllers/ClienteController");

routes.post("/cadastro-cliente", ClienteController.cadastrarCliente);
routes.get("/todos-clientes", ClienteController.readAllCliente);
routes.put("/adicionar-ao-carrinho", ClienteController.AdicionarAoCarrinho);
routes.post("/login-cliente", ClienteController.loginCliente);
routes.post("/pega-carrinho-cliente", ClienteController.pegaProdutosCarrinho);
routes.post("/total-carrinho", ClienteController.somaTotalCarrinho);
routes.post("/remove-do-carrinho", ClienteController.removeItemCarrinho);

module.exports = routes;
