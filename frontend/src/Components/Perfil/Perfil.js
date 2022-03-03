import React, { useContext, useEffect } from "react";
import { UsuarioContext } from "../../Contexts/UsuarioContext/UsuarioContext";
import Header from "../Header/Header";

const Perfil = () => {
  const { verificaStatusLogin } = useContext(UsuarioContext);

  useEffect(() => {
    verificaStatusLogin();
  }, []);

  return (
    <>
      <Header />
      Perfil
    </>
  );
};

export default Perfil;
