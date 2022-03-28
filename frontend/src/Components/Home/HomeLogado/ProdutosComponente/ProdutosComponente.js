import React from "react";
import { Link } from "react-router-dom";
import PaginationComponent from "../../../../hooks/PaginationComponent";
import Produto from "../../Produto";
import Carrinho from "../Carrinho";
import ContainerInformacoesProduto from "../ContainerInformacoesProduto";
import ContentPrecoEComprar from "../ContentPrecoEComprar";
import InformacoesProduto from "../InformacoesProduto";
import PrecoRoupa from "../PrecoRoupa";
import SeguraPaginacao from "../SeguraPaginacao";
import SeguraProduto from "../SeguraProduto";
import SpanAdicionarAoCarrinho from "../SpanAdicionarAoCarrinho";
import TituloProduto from "../TituloProduto";
import AdicionarAoCarrinhoHome from "../AdicionarAoCarrinhoHome";

const ProdutosComponente = ({
  data,
  ITENS_ATUAIS,
  setProdutoSelecionado,
  adicionarAoCarrinho,
  PAGES,
  pageAtual,
  setPageAtual,
}) => {
  return (
    <>
      <SeguraProduto>
        {ITENS_ATUAIS.map((item) => (
          <ContainerInformacoesProduto key={item._id}>
            <Produto>
              <Link
                onClick={() => {
                  setProdutoSelecionado(item);
                }}
                className="linkProduto"
                to={`/${item.nomeLoja}/${item.nome}`}
              >
                <div>
                  {" "}
                  <TituloProduto>
                    {item.nome} {item.marca}
                  </TituloProduto>
                  <InformacoesProduto>
                    {item.informacoesProduto}
                  </InformacoesProduto>
                  <InformacoesProduto>{item.tamanho}</InformacoesProduto>
                </div>
                <ContentPrecoEComprar>
                  <PrecoRoupa>{item.preco} R$</PrecoRoupa>
                  <Link to="/comprar" className="comprar">
                    Comprar
                  </Link>
                </ContentPrecoEComprar>
              </Link>
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
                <SpanAdicionarAoCarrinho>
                  Adicionar ao carrinho
                </SpanAdicionarAoCarrinho>
                <Carrinho />
              </AdicionarAoCarrinhoHome>
            </Produto>
          </ContainerInformacoesProduto>
        ))}
      </SeguraProduto>
      <SeguraPaginacao>
        <PaginationComponent
          pages={PAGES}
          pageAtual={pageAtual}
          setPageAtual={setPageAtual}
        />
      </SeguraPaginacao>
    </>
  );
};

export default ProdutosComponente;
