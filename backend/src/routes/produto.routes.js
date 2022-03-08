const { Router } = require("express");
const routes = new Router();
const ProdutoController = require("../controllers/ProdutoController");

routes.get("/pega-produtos", ProdutoController.verProdutos);
routes.post("/cadastrar-produto", ProdutoController.cadastroProduto);
routes.post("/pega-produto-categoria", ProdutoController.pegaProdutoCategoria);

module.exports = routes;
