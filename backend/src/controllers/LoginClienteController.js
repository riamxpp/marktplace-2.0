const Cliente = require("../models/ClienteData");

class LoginClienteController {
  async loginCliente(req, res) {
    const { email, senha } = req.body;
    const usuarioDados = await Cliente.findOne({
      email,
      senha,
    });

    if (usuarioDados) {
      req.session.usuarioLogado = true;
      const dadosUsuario = {
        nome: usuarioDados.nome,
        email: usuarioDados.email,
        cpf: usuarioDados.cpf,
        cidade: usuarioDados.cidade,
      };
      req.session.dadosUsuario = dadosUsuario;
      return res.json({ ...dadosUsuario, logado: true });
    }
    return res.json({ error: "Usuario não encontrado" });
  }

  async logoutCliente(req, res) {
    req.session.usuarioLogado = false;
    req.session.dadosUsuario = {};
  }

  async statusLoginCliente(req, res) {
    const logado = req.session.usuarioLogado;
    const dados = req.session.dadosUsuario;
    return res.json({ logado, dados });
  }
}

module.exports = new LoginClienteController();
