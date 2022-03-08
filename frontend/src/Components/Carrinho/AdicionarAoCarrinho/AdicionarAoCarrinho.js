import React, { useContext, useEffect } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import ContainerProdutosCarrinho from "./ContainerProdutosCarrinho";
import TituloAdicionarAoCarrinho from "./TituloAdicionarAoCarrinho";
import ProdutoNoCarrinho from "./ProdutoNoCarrinho";
import ContainerMostraProdutosCarrinho from "./ContainerMostraProdutosCarrinho";
import ContainerOperacoesCarrinho from "./ContainerOperacoesCarrinho";
import ContainerFicaProduto from "./ContainerFicaProduto";
import ContainerValorProduto from "./ContainerValorProduto";
import { UsuarioContext } from "../../../Contexts/UsuarioContext/UsuarioContext";
import { useNavigate } from "react-router-dom";

const AdicionarAoCarrinho = () => {
  const { pegaPorudotosCarrinho, data, carrinhoUser } =
    useContext(UsuarioContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      pegaPorudotosCarrinho(data.dadosUsuario.idUser);
    } else {
      navigate("/login");
    }
  }, [data, navigate]);

  return (
    <>
      <Header />
      <ContainerProdutosCarrinho>
        <ContainerMostraProdutosCarrinho>
          <TituloAdicionarAoCarrinho>Seu carrinho</TituloAdicionarAoCarrinho>
          {carrinhoUser?.map((produto) => (
            <ProdutoNoCarrinho>
              <ContainerFicaProduto>{produto.nome}</ContainerFicaProduto>
              <ContainerValorProduto>{produto.preco}</ContainerValorProduto>
            </ProdutoNoCarrinho>
          ))}
        </ContainerMostraProdutosCarrinho>

        <ContainerOperacoesCarrinho></ContainerOperacoesCarrinho>
      </ContainerProdutosCarrinho>
      <Footer />
    </>
  );
};

export default AdicionarAoCarrinho;
