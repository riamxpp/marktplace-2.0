import React, { useContext, useEffect, useState } from "react";

import Header from "../../Header/Header";
import ContainerProdutosCarrinho from "./ContainerProdutosCarrinho";
import TituloAdicionarAoCarrinho from "./TituloAdicionarAoCarrinho";
import ProdutoNoCarrinho from "./ProdutoNoCarrinho";
import ContainerMostraProdutosCarrinho from "./ContainerMostraProdutosCarrinho";
import ContainerOperacoesCarrinho from "./ContainerOperacoesCarrinho";
import ContainerFicaProduto from "./ContainerFicaProduto";
import ContainerValorProduto from "./ContainerValorProduto";
import { UsuarioContext } from "../../../Contexts/UsuarioContext/UsuarioContext";
import { useNavigate } from "react-router-dom";
import ParagrafoCarrinhoProduto from "./ParagrafoCarrinhoProduto";
import EstoqueCarrinho from "./EstoqueCarrinho";
import DivisaoPrecoSpanCarrinho from "./DivisaoPrecoSpanCarrinho";
import SubTotalCarrinho from "./SubTotalCarrinho";
import ButtonFinalizarPedidoCarrinho from "./ButtonFinalizarPedidoCarrinho";
import ExcluirProdutoCarrinho from "./ExcluirProdutoCarrinho";
import Footer from "../../Footer/Footer";

const AdicionarAoCarrinho = () => {
  const [animaCarrinho, setAnimaCarrinho] = useState(false);
  const {
    pegaProdutosCarrinho,
    data,
    carrinhoUser,
    pegaTotalCarrinho,
    totalCarrinho,
    removeItemCarrinho,
    setCarrinhoUser,
  } = useContext(UsuarioContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      pegaProdutosCarrinho(data.dadosUsuario.idUser);
      pegaTotalCarrinho(data.dadosUsuario.idUser);
    } else {
      navigate("/login");
    }
  }, [data, navigate]);

  function removeProduto(produto) {
    const copiaCarrinhoUser = carrinhoUser.filter(
      (item) => item.idProduto !== produto.idProduto
    );
    setCarrinhoUser(copiaCarrinhoUser);
    removeItemCarrinho(copiaCarrinhoUser, data.dadosUsuario.idUser);
  }

  return (
    <>
      <Header />
      <ContainerProdutosCarrinho>
        <ContainerMostraProdutosCarrinho>
          <TituloAdicionarAoCarrinho>Seu carrinho</TituloAdicionarAoCarrinho>
          {carrinhoUser?.map((produto) => (
            <ProdutoNoCarrinho key={produto.idProduto}>
              <ContainerFicaProduto>
                <ParagrafoCarrinhoProduto weigth="600">
                  {" "}
                  {produto.nome} {produto.informacoesProduto}{" "}
                </ParagrafoCarrinhoProduto>
                <EstoqueCarrinho>Em estoque</EstoqueCarrinho>
                <ExcluirProdutoCarrinho onClick={() => removeProduto(produto)}>
                  Excluir do carrinho
                </ExcluirProdutoCarrinho>
              </ContainerFicaProduto>
              <ContainerValorProduto estoque={produto.estoque}>
                <ParagrafoCarrinhoProduto weigth="700" size="1.1rem">
                  {produto.preco} R$
                </ParagrafoCarrinhoProduto>
                <DivisaoPrecoSpanCarrinho>
                  à vísta ou até 9x de R$ {(produto.preco / 9).toFixed(2)}
                </DivisaoPrecoSpanCarrinho>
              </ContainerValorProduto>
            </ProdutoNoCarrinho>
          ))}
        </ContainerMostraProdutosCarrinho>

        <ContainerOperacoesCarrinho onClick={() => setAnimaCarrinho(true)}>
          <SubTotalCarrinho>
            Subtotal ( {carrinhoUser?.length}{" "}
            {carrinhoUser?.length > 1 ? "items" : "item"} ): R$ {totalCarrinho}
          </SubTotalCarrinho>
          <ButtonFinalizarPedidoCarrinho>
            Finalizar Compra
          </ButtonFinalizarPedidoCarrinho>
        </ContainerOperacoesCarrinho>
      </ContainerProdutosCarrinho>
      <Footer />
    </>
  );
};

export default AdicionarAoCarrinho;
