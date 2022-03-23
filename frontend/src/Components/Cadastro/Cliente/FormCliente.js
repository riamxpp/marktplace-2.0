import styled from "styled-components";
import React, { useContext, useEffect, useState } from "react";
import "../../../Global.css";
import * as yup from "yup";

// import Input from "../../Form/Input";
import SeguraInput from "../../Geral/SeguraInput";
import Titulo from "../../Geral/Titulo";
import ButtonEnviar from "../ButtonEnviar";
import { useNavigate } from "react-router-dom";
import { UsuarioContext } from "../../../Contexts/UsuarioContext/UsuarioContext";
import MessageError from "../../Reutilizavel/MessageError";
import Input from "../../Form/Input";

const FormC = styled.form`
  width: 90%;
  height: auto;
  background-color: #fff;
  border-radius: 4px;
  display: ${({ display }) => (display === "cliente" ? "flex" : "none")};
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
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { cadastrarUsuario } = useContext(UsuarioContext);

  const schema = yup.object().shape({
    nome: yup.string().required("Nome é obrigatorio."),
    email: yup
      .string()
      .required("Email é obrigatorio.")
      .email("Passe um email válido."),
    senha: yup
      .string()
      .required("Senha é obrigatorio.")
      .min(6, "A senha deve ter no mínimo 6 caracteres."),
    cpf: yup
      .string()
      .required("CPF é obrigatorio.")
      .matches(
        "([0-9]{2}[.]?[0-9]{3}[.]?[0-9]{3}[/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2})",
        "Informe um valor de CPF válido."
      ),
    cidade: yup.string().required("Cidade é obrigatorio."),
  });

  async function cadastraUsuario(event) {
    event.preventDefault();
    const valores = { nome, email, senha, cpf, cidade };
    schema
      .validate(valores, { abortEarly: false })
      .then(() => {
        cadastrarUsuario(nome, email, senha, cpf, cidade);
        setData(true);
      })
      .catch((err) => {
        setError(err.errors[0]);
      });
  }

  useEffect(() => {
    if (data) {
      navigate("/login");
    }
  }, [data, navigate]);

  return (
    <>
      <FormC display={value} onSubmit={cadastraUsuario}>
        <Titulo>Cliente</Titulo>
        <SeguraInput width="100%">
          {error && <MessageError>{error}</MessageError>}
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
    </>
  );
};

export default FormCliente;
