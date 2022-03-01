import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../hooks/Loading";
import Header from "../Header/Header";
import ContentLojas from "./ContentLojas";
import Loja from "./Loja";
import PaginationComponent from "./PaginationComponent";
import Footer from "../Footer/Footer";

const Lojas = () => {
  const [data, setData] = useState(null);
  const [pageAtual, setPageAtual] = useState(0);
  const itemsPorPage = 5;

  useEffect(() => {
    async function pegaDados() {
      const dados = await axios.get("http://localhost:3333/ver-lojas");
      setData(dados);
      console.log(dados);
    }
    pegaDados();
  }, []);

  if (!data) return <Loading>Carregando</Loading>;
  const pages = Math.ceil(data.data.length / itemsPorPage);
  const startIndex = pageAtual * itemsPorPage;
  const endIndex = startIndex + itemsPorPage;
  const itemsAtuais = data.data.slice(startIndex, endIndex);

  return (
    <>
      <Header></Header>
      <ContentLojas>
        {itemsAtuais.map((loja) => {
          return <Loja key={loja.id}>{loja.loja}</Loja>;
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
