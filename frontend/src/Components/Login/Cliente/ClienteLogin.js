import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import * as yup from "yup";

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
  const [errorInput, setErrorInput] = useState("");
  const { LoginUsuario, data } = useContext(UsuarioContext);
  const navigate = useNavigate();

  let schema = yup.object().shape({
    email: yup
      .string()
      .required("O campo email é obrigatorio.")
      .email("Preencha um email válido."),
    senha: yup
      .string()
      .required("O campo senha é obrigatorio.")
      .min(6, "A senha tem no minimo 6 caracteres."),
  });

  async function sendClientDate(event) {
    event.preventDefault();
    const valores = { email, senha };
    schema
      .validate(valores, { abortEarly: false })
      .then(() => {
        LoginUsuario(email, senha);
      })
      .catch((err) => {
        setErrorInput(err.errors[0]);
      });
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
          {errorInput && <ErrorMessage>{errorInput}</ErrorMessage>}
          <Input
            placeholder="Email"
            type="email"
            autoComplete="current-email"
            id="emailLoginCliente"
            name="emailLoginCliente"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </SeguraInput>

        <SeguraInput>
          <Input
            placeholder="Senha"
            autoComplete="current-password"
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
