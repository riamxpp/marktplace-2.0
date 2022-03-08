import React, { useContext } from "react";

import Header from "../Header/Header";

import Footer from "../Footer/Footer";
import { UsuarioContext } from "../../Contexts/UsuarioContext/UsuarioContext";
import HomeLogado from "./HomeLogado/HomeLogado";
import HomeDeslogado from "./HomeDeslogado/HomeDeslogado";

const Home = () => {
  const { data } = useContext(UsuarioContext);

  return (
    <>
      <Header />
      {data ? <HomeLogado /> : <HomeDeslogado />}
      <Footer />
    </>
  );
};

export default Home;
