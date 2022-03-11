import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LojaContext } from "../../Contexts/LojaContext/LojaContext";
import { UsuarioContext } from "../../Contexts/UsuarioContext/UsuarioContext";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import PerfilCliente from "./PerfilCliente/PerfilCliente";
import PerfilLoja from "./PerfilLoja/PerfilLoja";

const Perfil = () => {
  const { data } = useContext(UsuarioContext);
  const { dataLojaLogada } = useContext(LojaContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!data && !dataLojaLogada) {
      navigate("/login");
    }
  }, [data, dataLojaLogada, navigate]);

  return (
    <>
      <Header />
      {data ? <PerfilCliente /> : <PerfilLoja />}
      <Footer />
    </>
  );
};

export default Perfil;
