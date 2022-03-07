import api from "../../Components/api/api";
const { createContext, useState } = require("react");

export const LojaContext = createContext();

export const LojaStorage = ({ children }) => {
  const [dataAllLojas, setDataAllLojas] = useState(null);
  const [dataLojaLogada, setDataLojaLogada] = useState(null);
  const [loadingLoja, setLoadingLoja] = useState(null);
  const [errorLoja, setErrorLoja] = useState(false);
  const [dadosProduto, setDadosProduto] = useState(null);

  async function pegaDadosLoja() {
    try {
      setLoadingLoja(true);
      const dados = await api.get("/ver-lojas");
      setDataAllLojas(dados.data);
    } catch (err) {
      setErrorLoja(true);
      setDataAllLojas(null);
    } finally {
      setLoadingLoja(false);
    }
  }

  async function loginLoja(email, senha) {
    const dados = await api.post("/login-loja", { email, senha });
    setDataLojaLogada(dados.data);
  }

  // async function cadastraProduto(nome, preco, categorio, tamanho) {
  //   const dados = await api.post();
  // }

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
      }}
    >
      {children}
    </LojaContext.Provider>
  );
};
