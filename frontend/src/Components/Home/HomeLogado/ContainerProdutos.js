import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import "./Link.css";
import { LojaContext } from "../../../Contexts/LojaContext/LojaContext";
import Produto from "../Produto";
import AdicionarAoCarrinhoHome from "./AdicionarAoCarrinhoHome";
import Carrinho from "./Carrinho";
import ContentPrecoEComprar from "./ContentPrecoEComprar";
import InformacoesProduto from "./InformacoesProduto";
import PrecoRoupa from "./PrecoRoupa";
import SpanAdicionarAoCarrinho from "./SpanAdicionarAoCarrinho";
import TituloProduto from "./TituloProduto";
import { Link, useNavigate } from "react-router-dom";
import { UsuarioContext } from "../../../Contexts/UsuarioContext/UsuarioContext";
import BackgroundLoading from "../../../hooks/BackgroundLoading";
import Loading from "../../../hooks/Loading";
import PaginationComponent from "../../../hooks/PaginationComponent";
import SeguraProduto from "./SeguraProduto";
import SeguraPaginacao from "./SeguraPaginacao";
import ContainerInformacoesProduto from "./ContainerInformacoesProduto";
import ProdutosComponente from "./ProdutosComponente/ProdutosComponente";
import SemProdutosCadastrados from "./SemProdutosCadastrados/SemProdutosCadastrados";

const DivProduto = styled.div`
  width: 52rem;
  height: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;

  @media (max-width: 1150px) {
    width: 34rem;
  }
  @media (max-width: 800px) {
    width: 16rem;
  }
`;

const ContainerProduto = ({ produtoSelecionado }) => {
  const [pageAtual, setPageAtual] = useState(0);
  const { data, adicionarAoCarrinho } = useContext(UsuarioContext);
  const { pegaProdutosCategoria, dadosProduto, setProdutoSelecionado } =
    useContext(LojaContext);
  const navigate = useNavigate();
  const ITEMS_POR_PAGINA = 12;

  useEffect(() => {
    if (!data) navigate("/login");
    pegaProdutosCategoria(produtoSelecionado);
  }, [produtoSelecionado, data, navigate]);

  if (!dadosProduto)
    return (
      <BackgroundLoading>
        <Loading></Loading>
      </BackgroundLoading>
    );

  const PAGES = Math.ceil(dadosProduto.data.length / ITEMS_POR_PAGINA);
  const START_INDEX = pageAtual * ITEMS_POR_PAGINA;
  const END_INDEX = START_INDEX + ITEMS_POR_PAGINA;
  const ITENS_ATUAIS = dadosProduto.data.slice(START_INDEX, END_INDEX);

  return (
    <DivProduto>
      {ITENS_ATUAIS.length > 0 ? (
        <ProdutosComponente
          data={data}
          ITENS_ATUAIS={ITENS_ATUAIS}
          setProdutoSelecionado={setProdutoSelecionado}
          adicionarAoCarrinho={adicionarAoCarrinho}
          PAGES={PAGES}
          pageAtual={pageAtual}
          setPageAtual={setPageAtual}
        />
      ) : (
        <SemProdutosCadastrados />
      )}
    </DivProduto>
  );
};

export default ContainerProduto;
