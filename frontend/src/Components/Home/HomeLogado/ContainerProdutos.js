import React, { useContext, useEffect } from "react";
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

const DivProduto = styled.div`
  width: 52rem;
  height: auto;
  padding: 1rem;
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
  const { data, adicionarAoCarrinho } = useContext(UsuarioContext);
  const { pegaProdutosCategoria, dadosProduto, loading } =
    useContext(LojaContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data) navigate("/login");
    pegaProdutosCategoria(produtoSelecionado);
  }, [produtoSelecionado, data, navigate]);

  console.log(dadosProduto);

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
            <InformacoesProduto>{item.tamanho}</InformacoesProduto>
          </div>
          <ContentPrecoEComprar>
            <PrecoRoupa>{item.preco} R$</PrecoRoupa>
            <Link to="/comprar" className="comprar">
              Comprar
            </Link>
          </ContentPrecoEComprar>
          <AdicionarAoCarrinhoHome
            onClick={() =>
              adicionarAoCarrinho(
                data.dadosUsuario.idUser,
                item._id,
                item.nome,
                item.categoria,
                item.preco,
                item.marca,
                item.informacoesProduto,
                item.estoque
              )
            }
          >
            <SpanAdicionarAoCarrinho>
              Adicionar ao carrinho
            </SpanAdicionarAoCarrinho>
            <Carrinho />
          </AdicionarAoCarrinhoHome>
        </Produto>
      ))}
    </DivProduto>
  );
};

export default ContainerProduto;
