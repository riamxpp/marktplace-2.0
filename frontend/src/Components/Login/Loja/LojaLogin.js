import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import ButtonEnviar from "../../Cadastro/ButtonEnviar";
import Input from "../../Form/Input";
import SeguraInput from "../../Geral/SeguraInput";
import Titulo from "../../Geral/Titulo";
import ErrorMessage from "../ErrorMessage";
import { LojaContext } from "../../../Contexts/LojaContext/LojaContext";
import { useNavigate } from "react-router-dom";

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

  async function sendLojaData(event) {
    event.preventDefault();
    loginLoja(email, senha);
  }

  useEffect(() => {
    if (dataLojaLogada) {
      console.log(dataLojaLogada);
      navigate(`/${dataLojaLogada.nome}/perfil`);
    }
  }, [dataLojaLogada, navigate]);

  return (
    <>
      <LojaForm onSubmit={sendLojaData} value={ativaClienteOrLoja}>
        <Titulo>Loja</Titulo>
        {dataLojaLogada && <ErrorMessage>{dataLojaLogada.error}</ErrorMessage>}
        <SeguraInput>
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
