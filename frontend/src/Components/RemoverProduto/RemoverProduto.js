import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LojaContext } from "../../Contexts/LojaContext/LojaContext";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ProdutoRemoverProdutos from "./ProdutoRemoverProdutos";
import SpanRemoverProduto from "./SpanRemoverProduto";
import TituloRemoverProduto from "./TituloRemoverProduto";
import ParagrafoContainerProduto from "./TitutloContainerProduto";
import TodosOsProdutosRemoveProdutos from "./TodosOsProdutosRemoveProdutos";

const RemoverProdutoSection = styled.section`
  width: 50rem;
  height: auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 2px;
  margin: 3rem auto;
`;

const RemoverProduto = () => {
  const {
    pegaProdutosCadastrado,
    dataLojaLogada,
    produtosCadastrados,
    removerProduto,
  } = useContext(LojaContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (!dataLojaLogada) navigate("/login");
    else pegaProdutosCadastrado(dataLojaLogada.idLoja);
  }, [dataLojaLogada, navigate]);

  return (
    <>
      <Header />
      <RemoverProdutoSection>
        <TodosOsProdutosRemoveProdutos>
          <TituloRemoverProduto>Seus produtos</TituloRemoverProduto>
          {produtosCadastrados?.map((produto) => (
            <ProdutoRemoverProdutos key={produto._id}>
              <ParagrafoContainerProduto>
                {produto.nome} {produto.informacoesProduto}
              </ParagrafoContainerProduto>
              <SpanRemoverProduto color="green">
                Estoque {produto.estoque}
              </SpanRemoverProduto>
              <SpanRemoverProduto
                onClick={() =>
                  removerProduto(produto._id, dataLojaLogada.idLoja)
                }
                color="#3a71fa"
              >
                Remover produto
              </SpanRemoverProduto>
            </ProdutoRemoverProdutos>
          ))}
        </TodosOsProdutosRemoveProdutos>
      </RemoverProdutoSection>
      <Footer />
    </>
  );
};

export default RemoverProduto;
