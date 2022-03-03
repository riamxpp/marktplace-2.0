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
      let dadosLoja = {
        idLoja: data._id,
        email: data.email,
        nome: data.nome,
        cidade: data.cidade,
        quantidadeProdutos: data.quantidadeProdutos,
        cnpj: data.cnpj,
        produtos: data.produtos,
      };
      req.session.dadosLoja = dadosLoja;

      return res.json(dadosLoja);
    }
    return res.json({ error: "Loja não encontrada" });
  }

  async statusLoginLoja(req, res) {
    console.log(req.session);
    return res.json({
      logadoLogado: req.session.lojaLogado,
      dadosLoja: req.session.dadosLoja,
    });
  }
}

module.exports = new LoginLojaController();
