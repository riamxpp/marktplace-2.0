const Loja = require("../models/LojaData");

class LoginLojaController {
  async loginLoja(req, res) {
    const { email, senha } = req.body;
    const data = await Loja.findOne({
      email,
      senha,
    });

    if (data) {
      req.session.lojaLogado = true;
      req.session.dadosLoja = {
        email: data.email,
        loja: data.loja,
        cidade: data.cidade,
        quantidadeProdutos: data.quantidadeProdutos,
        cnpj: data.cnpj,
      };

      return res.json({
        logado: true,
        email: data.email,
        loja: data.loja,
        cidade: data.cidade,
        quantidadeProdutos: data.quantidadeProdutos,
        cnpj: data.cnpj,
      });
    }
    return res.json({ error: "Loja não encontrada" });
  }
}

module.exports = new LoginLojaController();
