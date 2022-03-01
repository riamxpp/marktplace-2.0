import React, { useState } from "react";

import Header from "../Header/Header";
import ContentCadastro from "./ContentCadastro";
import OpcoesCadastro from "./OpcoesCadastro";
import ContentButtons from "./ContentButtons";
import FormularioArea from "./FormularioArea";
import FormCliente from "./Cliente/FormCliente";
import FormLoja from "./Loja/FormLoja";
import ButtonCliente from "./Cliente/ButtonCliente";
import ButtonLoja from "./Loja/ButtonLoja";
import Footer from "../Footer/Footer";

const Cadastro = () => {
  const [ativaClienteOrLoja, setAtivaClienteOrLoja] = useState("cliente");

  return (
    <>
      <Header></Header>
      <ContentCadastro>
        <OpcoesCadastro>
          <ContentButtons>
            <ButtonCliente
              border={ativaClienteOrLoja}
              onClick={() => {
                setAtivaClienteOrLoja("cliente");
              }}
            >
              Cliente
            </ButtonCliente>
            <ButtonLoja
              border={ativaClienteOrLoja}
              onClick={() => {
                setAtivaClienteOrLoja("loja");
              }}
            >
              Loja
            </ButtonLoja>
          </ContentButtons>
        </OpcoesCadastro>
        <FormularioArea>
          <FormCliente value={ativaClienteOrLoja} />
          <FormLoja value={ativaClienteOrLoja} />
        </FormularioArea>
      </ContentCadastro>
      <Footer />
    </>
  );
};

export default Cadastro;
