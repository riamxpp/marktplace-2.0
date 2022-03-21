import React, { useContext, useEffect } from "react";
import { LojaContext } from "../../Contexts/LojaContext/LojaContext";
import { UsuarioContext } from "../../Contexts/UsuarioContext/UsuarioContext";

import BackgroundLoading from "../../hooks/BackgroundLoading";
import Loading from "../../hooks/Loading";
import Header from "../Header/Header";
import NomeDaLojaProdutoIndividual from "./NomeDaLojaProdutoIndividual";
import SectionProdutoIndividual from "./SectionProdutoIndividual";
import ContainerInformacoesProdutoIndividual from "./ContainerInformacoesProdutoIndividual";
import ContainerPrecosProdutoIndividual from "./ContainerPrecosProdutoIndividual";
import DescricaoProdutoIndividual from "./DescricaoProdutoIndividual";
import MarcaProdutoIndividual from "./MarcaProdutoIndividual";
import PrecoProdutoIndividual from "./PrecoProdutoIndividual";
import EstoqueProdutoIndividual from "./EstoqueProdutoIndividual";
import TituloH2 from "../Reutilizavel/TituloH2";
import Footer from "../Footer/Footer";

const ProdutoIndividual = () => {
  const { produtoSelecionado } = useContext(LojaContext);
  const { pegaPrecoProduto, precoProduto, pegaEstoqueProduto, estoqueProduto } =
    useContext(UsuarioContext);

  useEffect(() => {
    pegaEstoqueProduto(produtoSelecionado._id);
    pegaPrecoProduto(produtoSelecionado._id);
  }, []);

  if (!produtoSelecionado || !precoProduto || !estoqueProduto) {
    return (
      <BackgroundLoading>
        <Loading />
      </BackgroundLoading>
    );
  }
  return (
    <>
      <Header />
      <NomeDaLojaProdutoIndividual>
        {produtoSelecionado.nomeLoja}
      </NomeDaLojaProdutoIndividual>
      <SectionProdutoIndividual>
        <ContainerInformacoesProdutoIndividual>
          <TituloH2 size="2rem">{produtoSelecionado.nome}</TituloH2>
          <DescricaoProdutoIndividual>
            {produtoSelecionado.informacoesProduto}
          </DescricaoProdutoIndividual>
          <MarcaProdutoIndividual>
            {produtoSelecionado.marca}
          </MarcaProdutoIndividual>
        </ContainerInformacoesProdutoIndividual>
        <ContainerPrecosProdutoIndividual>
          <PrecoProdutoIndividual>R$ {precoProduto}</PrecoProdutoIndividual>
          <EstoqueProdutoIndividual estoque={estoqueProduto}>
            {estoqueProduto ? "Em estoque" : "Sem estoque"}
          </EstoqueProdutoIndividual>
        </ContainerPrecosProdutoIndividual>
      </SectionProdutoIndividual>
      <Footer />
    </>
  );
};

export default ProdutoIndividual;
