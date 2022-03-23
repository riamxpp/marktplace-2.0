import React, { useContext, useEffect, useState } from "react";
import { LojaContext } from "../../../Contexts/LojaContext/LojaContext";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

import styled from "styled-components";
import ButtonEnviar from "../../Cadastro/ButtonEnviar";
import Input from "../../Form/Input";
import SeguraInput from "../../Geral/SeguraInput";
import Titulo from "../../Geral/Titulo";
import ErrorMessage from "../ErrorMessage";

const LojaForm = styled.form`
  width: 90%;
  margin-top: 2rem;
  height: auto;
  background-color: #fff;
  border-radius: 4px;
  display: ${({ value }) => (value === "loja" ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 0;
`;

const LojaLogin = ({
  ativaClienteOrLoja,
  email,
  setEmail,
  senha,
  setSenha,
}) => {
  const { loginLoja, dataLojaLogada } = useContext(LojaContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const schema = yup.object().shape({
    email: yup
      .string()
      .required("O campo email é obrigatorio")
      .email("Passe um email válido."),
    senha: yup
      .string()
      .required("O campo senha é obrigatorio.")
      .min(6, "A senha tem no mínimo 6 caracteres."),
  });

  async function sendLojaData(event) {
    event.preventDefault();
    schema
      .validate({ email, senha }, { abortEarly: false })
      .then(() => {
        loginLoja(email, senha);
      })
      .catch((err) => {
        setError(err.errors[0]);
      });
  }

  useEffect(() => {
    if (dataLojaLogada) {
      navigate(`/${dataLojaLogada.nome}/perfil`);
    }
  }, [dataLojaLogada, navigate]);

  return (
    <>
      <LojaForm onSubmit={sendLojaData} value={ativaClienteOrLoja}>
        <Titulo>Loja</Titulo>
        {dataLojaLogada && <ErrorMessage>{dataLojaLogada.error}</ErrorMessage>}
        <SeguraInput>
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Input
            placeholder="Email"
            type="email"
            autoComplete="current-email"
            id="emailLoginLoja"
            name="emailLoginLoja"
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </SeguraInput>
        <SeguraInput>
          <Input
            placeholder="Senha"
            type="password"
            autoComplete="current-password"
            id="senhaLoginLoja"
            name="senhaLoginLoja"
            value={senha}
            onChange={({ target }) => setSenha(target.value)}
          />
        </SeguraInput>
        <ButtonEnviar>Enviar</ButtonEnviar>
      </LojaForm>
    </>
  );
};

export default LojaLogin;
