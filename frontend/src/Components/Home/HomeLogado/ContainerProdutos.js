import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { LojaContext } from "../../../Contexts/LojaContext/LojaContext";
import Produto from "../Produto";
import AdicionarAoCarrinho from "./AdicionarAoCarrinho";
import Carrinho from "./Carrinho";
import InformacoesProduto from "./InformacoesProduto";
import PrecoRoupa from "./PrecoRoupa";
import SpanAdicionarAoCarrinho from "./SpanAdicionarAoCarrinho";
import TituloProduto from "./TituloProduto";

const DivProduto = styled.div`
  width: 52rem;
  height: auto;
  padding: 1rem;
  /* background: #333; */
  display: flex;
  flex-wrap: wrap;
  gap: 1.8rem;

  @media (max-width: 1150px) {
    width: 34rem;
  }
  @media (max-width: 800px) {
    width: 16rem;
  }
`;

const ContainerProduto = ({ produtoSelecionado }) => {
  const { pegaProdutosCategoria, dadosProduto, loading } =
    useContext(LojaContext);

  useEffect(() => {
    pegaProdutosCategoria(produtoSelecionado);
    console.log(dadosProduto);
  }, [produtoSelecionado]);

  if (loading) return <div>Loading...</div>;
  return (
    <DivProduto>
      {dadosProduto?.data.map((item) => (
        <Produto key={item._id}>
          <div>
            {" "}
            <TituloProduto>
              {item.nome} {item.marca}
            </TituloProduto>
            <InformacoesProduto>{item.informacoesProduto}</InformacoesProduto>
          </div>
          <PrecoRoupa>{item.preco} R$</PrecoRoupa>
          <AdicionarAoCarrinho>
            <SpanAdicionarAoCarrinho>
              Adicionar ao carrinho
            </SpanAdicionarAoCarrinho>
            <Carrinho />
          </AdicionarAoCarrinho>
        </Produto>
      ))}
    </DivProduto>
  );
};

export default ContainerProduto;
