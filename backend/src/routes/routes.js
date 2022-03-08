const { Router } = require("express");
const routes = new Router();

const Loja = require("./loja.routes");
const Cliente = require("./cliente.routes");
const Produtos = require("./produto.routes");

routes.use(Loja);
routes.use(Cliente);
routes.use(Produtos);

module.exports = routes;
