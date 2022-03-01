import React from "react";

import Header from "../Header/Header";
import Banner from "./Banner/Banner";
import BackgroundBanner from "../../assents/img/home/background.jpg";
import Titutlo from "./Banner/Titulo";
import ComoTrabalhamos from "./ComoTrabalhamos/ComoTrabalhamos";
import Trabalho from "./ComoTrabalhamos/Trabalho";

import HomeContent from "./HomeContent";
import Servicos from "./Servicos/Servicos";
import DepoimentosComponent from "./Depoimentos/Depoimentos";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
};

export default Home;
