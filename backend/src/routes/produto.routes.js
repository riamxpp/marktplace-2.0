const { Router } = require("express");
const routes = new Router();
const ProdutoController = require("../controllers/ProdutoController");
const { isAuthenticated } = require("../middleware/isAuthenticated");

routes.get("/pega-produtos", isAuthenticated, ProdutoController.verProdutos);
routes.post(
  "/cadastrar-produto",
  isAuthenticated,
  ProdutoController.cadastroProduto
);
routes.post("/pega-produto-categoria", ProdutoController.pegaProdutoCategoria);
routes.post("/pega-preco-produto", ProdutoController.pegaPrecoProduto);
routes.post("/pega-estoque-produto", ProdutoController.pegaEstoqueProduto);

module.exports = routes;
