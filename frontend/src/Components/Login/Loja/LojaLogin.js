import React, { useState } from "react";
import styled from "styled-components";
import ButtonEnviar from "../../Cadastro/ButtonEnviar";
import Input from "../../Form/Input";
import SeguraInput from "../../Geral/SeguraInput";
import Titulo from "../../Geral/Titulo";
import api from "../../api/api";
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
  const [dados, setDados] = useState(null);

  async function sendLojaData(event) {
    event.preventDefault();

    const data = await api
      .post("/login-loja", {
        email,
        senha,
      })
      .then((response) => response)
      .catch((error) => error);
    setDados(data);
  }

  return (
    <>
      <LojaForm onSubmit={sendLojaData} value={ativaClienteOrLoja}>
        <Titulo>Loja</Titulo>
        {dados && <ErrorMessage>{dados.data.error}</ErrorMessage>}
        <SeguraInput>
          <Input
            placeholder="Email"
            type="email"
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
