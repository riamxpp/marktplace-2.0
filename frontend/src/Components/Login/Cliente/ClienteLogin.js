import React, { useContext, useEffect } from "react";
import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import ButtonEnviar from "../../Cadastro/ButtonEnviar";
import Input from "../../Form/Input";
import SeguraInput from "../../Geral/SeguraInput";
import Titulo from "../../Geral/Titulo";
import ErrorMessage from "../ErrorMessage";
import { UsuarioContext } from "../../../Contexts/UsuarioContext/UsuarioContext";

const ClienteForm = styled.form`
  width: 90%;
  height: auto;
  margin-top: 2rem;
  background-color: #fff;
  border-radius: 4px;
  display: ${({ value }) => (value === "cliente" ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 0;
`;

const ClienteLogin = ({
  ativaClienteOrLoja,
  email,
  setEmail,
  senha,
  setSenha,
}) => {
  const { LoginUsuario, data } = useContext(UsuarioContext);
  const navigate = useNavigate();
  async function sendClientDate(event) {
    event.preventDefault();
    LoginUsuario(email, senha);
  }

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [navigate, data]);

  return (
    <>
      <ClienteForm
        method="POST"
        onSubmit={sendClientDate}
        value={ativaClienteOrLoja}
      >
        <Titulo>Cliente</Titulo>
        {data && <ErrorMessage>{data.error}</ErrorMessage>}

        <SeguraInput>
          <Input
            placeholder="Email"
            type="email"
            id="emailLoginCliente"
            name="emailLoginCliente"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </SeguraInput>

        <SeguraInput>
          <Input
            placeholder="Senha"
            type="password"
            id="senhaLoginCliente"
            name="senhaLoginCliente"
            value={senha}
            onChange={({ target }) => setSenha(target.value)}
          />
        </SeguraInput>
        <ButtonEnviar>Enviar</ButtonEnviar>
      </ClienteForm>
    </>
  );
};

export default ClienteLogin;
