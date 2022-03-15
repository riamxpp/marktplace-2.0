const { Router } = require("express");
const routes = new Router();
const ProdutoController = require("../controllers/ProdutoController");
const { isAuthenticated } = require("../middleware/isAuthenticated");

routes.get("/pega-produtos", isAuthenticated, ProdutoController.verProdutos);
routes.post("/cadastrar-produto", isAuthenticated, ProdutoController.cadastroProduto);
routes.post("/pega-produto-categoria", isAuthenticated, ProdutoController.pegaProdutoCategoria);

module.exports = routes;
