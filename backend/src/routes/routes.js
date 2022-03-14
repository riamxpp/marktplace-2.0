const { Router } = require("express");
const routes = new Router();

const Loja = require("./loja.routes");
const Cliente = require("./cliente.routes");
const Produtos = require("./produto.routes");
const { secret } = require("./secret");
const { isAuthenticated } = require("../middleware/isAuthenticated");

routes.use(Loja);
routes.use(Cliente);
routes.use(Produtos);
routes.get("/secret", isAuthenticated, secret);

module.exports = routes;
