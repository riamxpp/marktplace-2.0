import React, { useState } from "react";

import Header from "../Header/Header";
import ContentLogin from "./ContentLogin";
import ContentButtonsLogin from "./ContentButtonsLogin";
import SeguraButtons from "./SeguraButtons";
import LoginArea from "./LoginArea";
import ButtonCliente from "../Cadastro/Cliente/ButtonCliente";
import ButtonLoja from "../Cadastro/Loja/ButtonLoja";
import Footer from "../Footer/Footer";
import LojaLogin from "./Loja/LojaLogin";
import ClienteLogin from "./Cliente/ClienteLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [ativaClienteOrLoja, setAtivaClienteOrLoja] = useState("cliente");

  return (
    <>
      <Header></Header>
      <ContentLogin>
        <ContentButtonsLogin>
          <SeguraButtons>
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
          </SeguraButtons>
        </ContentButtonsLogin>
        <LoginArea>
          <ClienteLogin
            ativaClienteOrLoja={ativaClienteOrLoja}
            email={email}
            setEmail={setEmail}
            senha={senha}
            setSenha={setSenha}
          ></ClienteLogin>
          <LojaLogin
            ativaClienteOrLoja={ativaClienteOrLoja}
            email={email}
            setEmail={setEmail}
            senha={senha}
            setSenha={setSenha}
          ></LojaLogin>
        </LoginArea>
      </ContentLogin>
      <Footer />
    </>
  );
};

export default Login;
