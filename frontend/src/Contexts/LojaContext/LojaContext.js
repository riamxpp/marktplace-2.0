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
    try {
      const dados = await api.post("/login-loja", 
      { email, senha }
      );
      setDataLojaLogada(dados.data);
    }catch(err) {
      console.log(err)
    }
    
  }

  async function cadastroProduto(
    nome,
    preco,
    categoria,
    marca,
    tamanho,
    informacoesProduto,
    estoque
  ) {
    if (dataLojaLogada) {
      try {
        await api.post("/cadastrar-produto", {
          idLoja: dataLojaLogada.idLoja,
          nome: nome,
          preco: preco,
          categoria: categoria,
          marca: marca,
          informacoesProduto: informacoesProduto,
          tamanho: tamanho,
          estoque,
        }, 
        { headers: { "Authorization": `Bearer ${dataLojaLogada.token}`}});
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
    try {
      await api.post("/remover-produto", 
      { idLoja, idProduto },
      { headers: { "Authorization": `Bearer ${dataLojaLogada.token}`}}
      );
      await pegaProdutosCadastrado(idLoja); 
    }catch(err){
      console.log(err)
    }
  }

  async function pegaProdutosCadastrado(idLoja) {
    try {
      const dados = await api.post("/pega-produtos-cadastrados", 
      { idLoja }, 
      { headers: { "Authorization": `Bearer ${dataLojaLogada.token}`}}
      );
      setProdutosCadastrados(dados.data);
    }catch(err) {
      console.log(err)
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
