const { Router } = require("express");
const routes = new Router();
const LojaController = require("../controllers/LojaController");

routes.post("/cadastrar-loja", LojaController.createLoja);
routes.get("/ver-lojas", LojaController.readAll);
routes.delete("/loja/:id", LojaController.deleteLoja);
routes.post("/login-loja", LojaController.loginLoja);

module.exports = routes;
