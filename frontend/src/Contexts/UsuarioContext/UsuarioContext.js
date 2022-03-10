import React, { createContext, useState } from "react";
import api from "../../Components/api/api";

export const UsuarioContext = createContext();

export const UsuarioStorage = ({ children }) => {
  const [data, setData] = useState(null);
  const [login, setLogin] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [carrinhoUser, setCarrinhoUser] = useState(null);
  const [totalCarrinho, setTotalCarrinho] = useState(null);

  async function LoginUsuario(email, senha) {
    try {
      setLoading(true);
      const data = await api
        .post("/login-cliente", {
          email,
          senha,
        })
        .then((response) => response)
        .catch((error) => console.log("Erro: ", error));
      if (!data.data.error) {
        setData(data.data);
        setLogin(true);
      }
    } catch (err) {
      setData(null);
      setLogin(false);
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  function Logout() {
    api.post("/logout-cliente");
    setLogin(null);
    setData(null);
  }

  async function verificaStatusLogin() {
    const dados = await api.get("/status-login-cliente");
    console.log("f Usuario: ", dados.data);
  }

  async function adicionarAoCarrinho(
    idUser,
    idProduto,
    nome,
    categoria,
    preco,
    marca,
    informacoesProduto,
    estoque
  ) {
    await api.put("/adicionar-ao-carrinho", {
      _id: idUser,
      idProduto,
      nome,
      categoria,
      preco,
      marca,
      informacoesProduto,
      estoque,
    });
  }

  async function pegaProdutosCarrinho(_id) {
    const dados = await api.post("/pega-carrinho-cliente", { _id });
    setCarrinhoUser(dados.data.carrinho);
    return carrinhoUser;
  }

  async function pegaTotalCarrinho(_id) {
    const dados = await api.post("/total-carrinho", { _id });
    setTotalCarrinho(dados.data);
    return totalCarrinho;
  }

  async function removeItemCarrinho(carrinho, _id) {
    await api.post("/remove-do-carrinho", {
      carrinhoProduto: carrinho,
      _id,
    });
  }

  return (
    <UsuarioContext.Provider
      value={{
        data,
        login,
        error,
        loading,
        carrinhoUser,
        setCarrinhoUser,
        totalCarrinho,
        LoginUsuario,
        Logout,
        verificaStatusLogin,
        adicionarAoCarrinho,
        pegaProdutosCarrinho,
        pegaTotalCarrinho,
        removeItemCarrinho,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
