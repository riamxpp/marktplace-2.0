import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
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
import "./Link.css";
import { UsuarioContext } from "../../../Contexts/UsuarioContext/UsuarioContext";
import AnimacaoAdicionaAoCarrinho from "./AnimacaoAdicionaAoCarrinho";
import LoadingAdicionarAoCarrinho from "./LoadingAdicionarAoCarrinho";
import BackgroundLoading from "../../../hooks/BackgroundLoading";
import Loading from "../../../hooks/Loading";
import PaginationComponent from "../../../hooks/PaginationComponent";
import SeguraProduto from "./SeguraProduto";
import SeguraPaginacao from "./SeguraPaginacao";

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
  const { pegaProdutosCategoria, dadosProduto } = useContext(LojaContext);
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
      <SeguraProduto>
        {ITENS_ATUAIS.map((item) => (
          <Produto key={item._id}>
            <div>
              {" "}
              <TituloProduto>
                {item.nome} {item.marca}
              </TituloProduto>
              <InformacoesProduto>{item.informacoesProduto}</InformacoesProduto>
              <InformacoesProduto>{item.tamanho}</InformacoesProduto>
            </div>
            <ContentPrecoEComprar>
              <PrecoRoupa>{item.preco} R$</PrecoRoupa>
              <Link to="/comprar" className="comprar">
                Comprar
              </Link>
            </ContentPrecoEComprar>
            <AdicionarAoCarrinhoHome
              onClick={() => {
                adicionarAoCarrinho(
                  data.dadosUsuario.idUser,
                  item._id,
                  item.nome,
                  item.categoria,
                  item.preco,
                  item.marca,
                  item.informacoesProduto,
                  item.estoque
                );
              }}
            >
              <AnimacaoAdicionaAoCarrinho>
                <LoadingAdicionarAoCarrinho>
                  Produto adicionado
                </LoadingAdicionarAoCarrinho>
              </AnimacaoAdicionaAoCarrinho>
              <SpanAdicionarAoCarrinho>
                Adicionar ao carrinho
              </SpanAdicionarAoCarrinho>
              <Carrinho />
            </AdicionarAoCarrinhoHome>
          </Produto>
        ))}
      </SeguraProduto>
      <SeguraPaginacao>
        <PaginationComponent
          pages={PAGES}
          pageAtual={pageAtual}
          setPageAtual={setPageAtual}
        />
      </SeguraPaginacao>
    </DivProduto>
  );
};

export default ContainerProduto;
