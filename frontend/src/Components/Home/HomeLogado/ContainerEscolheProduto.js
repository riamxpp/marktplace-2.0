import React from "react";
import styled from "styled-components";
import LiProdutos from "./LiProdutos";

const DivEscolheProduto = styled.div`
  width: 10rem;
  height: 29rem;
  background: #fff;
  padding: 1rem;
  border-radius: 2px;
  margin-top: 1rem;
`;

const ContainerEscolheProduto = ({ setProdutoSelecionado }) => {
  function pegaProdutoSelecionado(event) {
    setProdutoSelecionado(event.target.innerText.toLowerCase());
  }

  return (
    <DivEscolheProduto>
      <nav>
        <ul>
          <LiProdutos onClick={pegaProdutoSelecionado}>Tecnologia</LiProdutos>
          <LiProdutos onClick={pegaProdutoSelecionado}>Roupas</LiProdutos>
          <LiProdutos onClick={pegaProdutoSelecionado}>Domesticos</LiProdutos>
          <LiProdutos onClick={pegaProdutoSelecionado}>Livros</LiProdutos>
        </ul>
      </nav>
    </DivEscolheProduto>
  );
};

export default ContainerEscolheProduto;
