import api from "../../Components/api/api";
const { createContext, useState } = require("react");

export const LojaContext = createContext();

export const LojaStorage = ({ children }) => {
  const [dataAllLojas, setDataAllLojas] = useState(null);
  const [dataLojaLogada, setDataLojaLogada] = useState(null);
  const [loadingLoja, setLoadingLoja] = useState(null);
  const [errorLoja, setErrorLoja] = useState(false);
  const [dadosProduto, setDadosProduto] = useState(null);
  const [produtosCadastrados, setProdutosCadastrados] = useState(null);

  async function pegaDadosLoja() {
    try {
      setLoadingLoja(true);
      const dados = await api.get("/ver-lojas");
      if (dados.statusText === "OK") setDataAllLojas(dados.data);
    } catch (err) {
      setErrorLoja(true);
      setDataAllLojas(null);
    } finally {
      setLoadingLoja(false);
      return;
    }
  }

  async function loginLoja(email, senha) {
    const dados = await api.post("/login-loja", { email, senha });
    setDataLojaLogada(dados.data);
  }

  async function cadastroProduto(
    nome,
    preco,
    categoria,
    marca,
    tamanho,
    informacoesProduto
  ) {
    if (dataLojaLogada) {
      try {
        await api.post("/cadastrar-produto", {
          idLoja: dataLojaLogada.idLoja,
          emailLoja: dataLojaLogada.email,
          nome: nome,
          preco: preco,
          categoria: categoria,
          marca: marca,
          informacoesProduto: informacoesProduto,
          tamanho: tamanho,
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  async function verificaStatusLoginLoja() {
    const dados = await api.get("/status-login-cliente");
    console.log("lojas: ", dados.data);
  }

  async function pegaProdutosCategoria(categoria) {
    try {
      setLoadingLoja(true);
      const dados = await api.post("/pega-produto-categoria", {
        categoria: categoria,
      });
      setDadosProduto(dados);
    } catch (err) {
      setDadosProduto(null);
      setErrorLoja(true);
    } finally {
      setLoadingLoja(false);
    }
  }

  async function removerProduto(idProduto, idLoja) {
    await api.post("/remover-produto", { idLoja, idProduto });
    await pegaProdutosCadastrado(idLoja);
  }

  async function pegaProdutosCadastrado(idLoja) {
    const dados = await api.post("/pega-produtos-cadastrados", { idLoja });
    setProdutosCadastrados(dados.data);
  }

  return (
    <LojaContext.Provider
      value={{
        dataLojaLogada,
        dataAllLojas,
        loadingLoja,
        errorLoja,
        pegaDadosLoja,
        loginLoja,
        verificaStatusLoginLoja,
        pegaProdutosCategoria,
        dadosProduto,
        cadastroProduto,
        produtosCadastrados,
        pegaProdutosCadastrado,
        removerProduto,
      }}
    >
      {children}
    </LojaContext.Provider>
  );
};
