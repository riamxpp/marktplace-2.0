import React from "react";
import Banner from "./Banner/Banner";
import Titutlo from "./Banner/Titulo";
import ComoTrabalhamos from "./ComoTrabalhamos/ComoTrabalhamos";
import Trabalho from "./ComoTrabalhamos/Trabalho";
import HomeContent from "../HomeContent";
import BackgroundBanner from "../../../assents/img/home/background.jpg";
import Servicos from "./Servicos/Servicos";
import DepoimentosComponent from "./Depoimentos/Depoimentos";

const HomeDeslogado = () => {
  return (
    <>
      <HomeContent>
        <Banner img={BackgroundBanner}>
          <Titutlo>Sua loja a um clique de distância</Titutlo>
        </Banner>
        <ComoTrabalhamos>
          <Trabalho></Trabalho>
          <Trabalho></Trabalho>
          <Trabalho></Trabalho>
        </ComoTrabalhamos>
      </HomeContent>
      <Servicos></Servicos>
      <DepoimentosComponent />
    </>
  );
};

export default HomeDeslogado;
