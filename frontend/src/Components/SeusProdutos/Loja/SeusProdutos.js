import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LojaContext } from "../../../Contexts/LojaContext/LojaContext";

import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import ContainerProdutosSeusProdutos from "./ContainerProdutosSeusProdutos";
import ContentInformacoesSeusProdutos from "./ContentInformacoesSeusProdutos";
import ContentPrecoSeusProdutos from "./ContentPrecoSeusProdutos";
import ParagrafoSeusProdutos from "./ParagrafoSeusProdutos";
import ProdutoSeusProdutos from "./ProdutoSeusProdutos";
import SeguraProdutoSeusProdutos from "./SeguraProdutoSeusProdutos";
import TituloSeusProdutos from "./TitutloSeusProdutos";

const SeusProdutosSection = styled.section`
  width: 65.5rem;
  height: auto;
  padding: 1rem;
  background: #fff;
  border-radius: 2px;
  margin: 2rem auto;
  @media (max-width: 1000px) {
    width: 49rem;
  }

  @media (max-width: 850px) {
    width: 32.5rem;
  }

  @media (max-width: 590px) {
    width: 15.5rem;
  }
`;

const SeusProdutos = () => {
  const { pegaProdutosCadastrado, dataLojaLogada, produtosCadastrados } =
    useContext(LojaContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!dataLojaLogada) navigate("/login");
    pegaProdutosCadastrado(dataLojaLogada.idLoja);
  }, [dataLojaLogada, navigate]);

  return (
    <>
      <Header />
      <SeusProdutosSection>
        <ContainerProdutosSeusProdutos>
          <TituloSeusProdutos>Seus Produtos</TituloSeusProdutos>
          <SeguraProdutoSeusProdutos>
            {produtosCadastrados?.map((produto) => (
              <ProdutoSeusProdutos>
                <ContentInformacoesSeusProdutos>
                  <ParagrafoSeusProdutos weight="500" size="1.1rem">
                    {produto.nome}
                  </ParagrafoSeusProdutos>
                  <ParagrafoSeusProdutos fstyle="italic">
                    {produto.informacoesProduto}
                  </ParagrafoSeusProdutos>
                  <ParagrafoSeusProdutos>
                    {produto.categoria}
                  </ParagrafoSeusProdutos>
                </ContentInformacoesSeusProdutos>
                <ContentPrecoSeusProdutos>
                  <ParagrafoSeusProdutos
                    marginT="10%"
                    color="green"
                    weight="bold"
                  >
                    R$ {produto.preco}{" "}
                  </ParagrafoSeusProdutos>
                </ContentPrecoSeusProdutos>
              </ProdutoSeusProdutos>
            ))}
          </SeguraProdutoSeusProdutos>
        </ContainerProdutosSeusProdutos>
      </SeusProdutosSection>
      <Footer />
    </>
  );
};

export default SeusProdutos;
