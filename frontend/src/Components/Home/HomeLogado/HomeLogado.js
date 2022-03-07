import React, { useState } from "react";
import styled from "styled-components";
import ContainerEscolheProduto from "./ContainerEscolheProduto";
import ContainerProduto from "./ContainerProdutos";

const SectionHomeLogado = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  gap: 3rem;
  margin: 4rem 0;
  justify-content: space-around;
  @media (max-width: 1150px) {
    gap: 1rem;
  }
`;

const HomeLogado = () => {
  const [produtoSelecionado, setProdutoSelecionado] = useState("tecnologia");

  return (
    <SectionHomeLogado>
      <ContainerEscolheProduto setProdutoSelecionado={setProdutoSelecionado} />
      <ContainerProduto produtoSelecionado={produtoSelecionado} />
    </SectionHomeLogado>
  );
};

export default HomeLogado;
