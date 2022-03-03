import styled from "styled-components";
import React, { useEffect, useState } from "react";

import Input from "../../Form/Input";
import SeguraInput from "../../Geral/SeguraInput";
import Titulo from "../../Geral/Titulo";
import api from "../../api/api";
import ButtonEnviar from "../ButtonEnviar";
import { useNavigate } from "react-router-dom";

const BaseURL = "localhost:3333";

const FormC = styled.form`
  width: 90%;
  height: auto;
  background-color: #fff;
  border-radius: 4px;
  display: ${({ value }) => (value === "cliente" ? "flex" : "none")};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 0;
`;

const FormCliente = ({ value }) => {
  const [data, setData] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cpf, setCpf] = useState("");
  const [cidade, setCidade] = useState("");
  const navigate = useNavigate();

  async function cadastraUsuario(event) {
    event.preventDefault();
    const dados = { nome, email, senha, cpf, cidade };
    const dataUser = await api
      .post("/cadastro-cliente", dados)
      .then((res) => res)
      .catch((err) => console.log(err));
    setData(dataUser);
  }

  useEffect(() => {
    if (data) {
      navigate("/login");
    }
  }, [data, navigate]);

  return (
    <FormC
      value={value}
      onSubmit={cadastraUsuario}
      action={BaseURL + "/cadastro-cliente"}
      method="POST"
    >
      <Titulo>Cliente</Titulo>
      <SeguraInput width="100%">
        <Input
          width="80%"
          id="nome"
          name="nome"
          placeholder="Nome Completo"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
      </SeguraInput>
      <SeguraInput width="100%">
        <Input
          width="80%"
          placeholder="Email"
          id="emailCliente"
          autoComplete="new-email"
          name="emailCliente"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </SeguraInput>
      <SeguraInput width="100%">
        <Input
          width="80%"
          autoComplete="new-password"
          placeholder="Senha"
          id="senhaCliente"
          name="senhaCliente"
          value={senha}
          onChange={({ target }) => setSenha(target.value)}
        />
      </SeguraInput>
      <SeguraInput width="100%">
        <Input
          width="80%"
          placeholder="CPF"
          id="cpf"
          name="cpf"
          value={cpf}
          onChange={({ target }) => setCpf(target.value)}
        />
      </SeguraInput>
      <SeguraInput width="100%">
        <Input
          width="80%"
          placeholder="Cidade"
          id="cidadeCliente"
          name="cidadeCliente"
          value={cidade}
          onChange={({ target }) => setCidade(target.value)}
        />
      </SeguraInput>
      <ButtonEnviar>Enviar</ButtonEnviar>
    </FormC>
  );
};

export default FormCliente;
