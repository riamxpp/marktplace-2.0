import React from "react";
import ContainerSemProdutosCadastrados from "./ContainerSemProdutosCadastrados";
import MessageSemProdutosCadastrados from "./MessageSemProdutosCadastrados";

const SemProdutosCadastrados = () => {
  return (
    <ContainerSemProdutosCadastrados>
      <MessageSemProdutosCadastrados>
        Essa categoria não tem produtos cadastrados no momento!!!
      </MessageSemProdutosCadastrados>
    </ContainerSemProdutosCadastrados>
  );
};

export default SemProdutosCadastrados;
