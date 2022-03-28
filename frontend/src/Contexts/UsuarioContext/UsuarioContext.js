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
  const [precoProduto, setPrecoProduto] = useState(0);
  const [estoqueProduto, setEstoqueProduto] = useState(null);

  async function cadastrarUsuario(nome, email, senha, cpf, cidade) {
    const dados = { nome, email, senha, cpf, cidade };
    await api
      .post("/cadastro-cliente", dados)
      .then((res) => res)
      .catch((err) => console.log(err));
  }

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
    try {
      await api.put(
        "/adicionar-ao-carrinho",
        {
          _id: idUser,
          idProduto,
          nome,
          categoria,
          preco,
          marca,
          informacoesProduto,
          estoque,
        },
        {
          headers: {
            Authorization: `Bearer ${data.dadosUsuario.token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function pegaProdutosCarrinho(_id) {
    try {
      if (data) {
        const dados = await api.post(
          "/pega-carrinho-cliente",
          { _id },
          {
            headers: {
              Authorization: `Bearer ${data.dadosUsuario.token}`,
            },
          }
        );
        setCarrinhoUser(dados.data.carrinho);
        return carrinhoUser;
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function pegaTotalCarrinho(_id) {
    await api
      .post(
        "/total-carrinho",
        { _id },
        {
          headers: { Authorization: `Bearer ${data.dadosUsuario.token}` },
        }
      )
      .then((result) => setTotalCarrinho(result.data))
      .catch((err) => console.log(err));
  }

  async function removeItemCarrinho(carrinho, _id) {
    try {
      await api.post(
        "/remove-do-carrinho",
        {
          carrinhoProduto: carrinho,
          _id,
        },
        {
          headers: { Authorization: `Bearer ${data.dadosUsuario.token}` },
        }
      );
    } catch (err) {
      console.log(err);
    }
  }

  async function pegaPrecoProduto(idProduto) {
    const preco = await api.post("/pega-preco-produto", {
      idProduto,
    });
    setPrecoProduto(preco.data);
  }

  async function pegaEstoqueProduto(idProduto) {
    const estoque = await api.post("/pega-estoque-produto", {
      idProduto,
    });
    setEstoqueProduto(estoque.data);
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
        cadastrarUsuario,
        LoginUsuario,
        Logout,
        verificaStatusLogin,
        adicionarAoCarrinho,
        pegaProdutosCarrinho,
        pegaTotalCarrinho,
        removeItemCarrinho,
        pegaPrecoProduto,
        precoProduto,
        pegaEstoqueProduto,
        estoqueProduto,
      }}
    >
      {children}
    </UsuarioContext.Provider>
  );
};
