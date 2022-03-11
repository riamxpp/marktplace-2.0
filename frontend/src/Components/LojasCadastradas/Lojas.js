import React, { useContext, useEffect, useState } from "react";

import Loading from "../../hooks/Loading";
import Header from "../Header/Header";
import ContentLojas from "./ContentLojas";
import Loja from "./Loja";
import PaginationComponent from "./PaginationComponent";
import Footer from "../Footer/Footer";
import { LojaContext } from "../../Contexts/LojaContext/LojaContext";
import AreaNomeLoja from "./AreaNomeLoja";
import AreaContentLoja from "./AreaContentLoja";
import TituloAreaContentLoja from "./TituloAreaContentLoja";
import ParagrafoContentLoja from "./ParagrafoContentLoja";
import EnderecoContent from "./EnderecoContent";

const Lojas = () => {
  const [pageAtual, setPageAtual] = useState(0);
  const itemsPorPage = 5;
  const { pegaDadosLoja, dataAllLojas } = useContext(LojaContext);

  useEffect(() => {
    pegaDadosLoja();
  }, []);

  if (!dataAllLojas) return <Loading>Carregando</Loading>;

  const pages = Math.ceil(dataAllLojas.length / itemsPorPage);
  const startIndex = pageAtual * itemsPorPage;
  const endIndex = startIndex + itemsPorPage;
  const itemsAtuais = dataAllLojas.slice(startIndex, endIndex);
  console.log(itemsAtuais);
  return (
    <>
      <Header></Header>
      <ContentLojas>
        {itemsAtuais.map((loja) => {
          return (
            <Loja key={loja._id}>
              <AreaNomeLoja>{loja.nome}</AreaNomeLoja>
              <AreaContentLoja>
                <EnderecoContent>
                  {" "}
                  <TituloAreaContentLoja>Enderenço:</TituloAreaContentLoja>
                  <ParagrafoContentLoja>
                    rua {loja.rua}, N° {loja.numero} {loja.cidade}
                  </ParagrafoContentLoja>
                </EnderecoContent>
                <EnderecoContent>
                  <TituloAreaContentLoja>
                    Produtos vendidos:{" "}
                  </TituloAreaContentLoja>
                  <ParagrafoContentLoja>
                    {loja.quantidadeProdutos}
                  </ParagrafoContentLoja>
                </EnderecoContent>
              </AreaContentLoja>
            </Loja>
          );
        })}
        <PaginationComponent
          pages={pages}
          pageAtual={pageAtual}
          setPageAtual={setPageAtual}
        ></PaginationComponent>
      </ContentLojas>
      <Footer></Footer>
    </>
  );
};

export default Lojas;
