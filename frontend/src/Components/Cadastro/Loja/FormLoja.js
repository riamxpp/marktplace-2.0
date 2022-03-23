import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { LojaContext } from "../../../Contexts/LojaContext/LojaContext";
import * as yup from "yup";

import Input from "../../Form/Input";
import SeguraInput from "../../Geral/SeguraInput";
import Titulo from "../../Geral/Titulo";
import ButtonEnviar from "../ButtonEnviar";
import ErrorMessage from "../../Login/ErrorMessage";

const FormL = styled.form`
  width: 90%;
  height: auto;
  background-color: #fff;
  border-radius: 4px;
  display: ${({ value }) => (value === "loja" ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  padding: 2rem 0;
`;

const FormLoja = ({ value }) => {
  const [data, setData] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [cidade, setCidade] = useState("");
  const [rua, setRua] = useState("");
  const [bairro, setBairro] = useState("");
  const [numero, setNumero] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const { cadastrarLoja } = useContext(LojaContext);

  const schema = yup.object().shape({
    nome: yup.string().required("O campo nome é obrigatorio."),
    email: yup
      .string()
      .required("O campo email é obrigatorio.")
      .email("Passe um email válido."),
    senha: yup
      .string()
      .required("O campo senha é obrigatorio.")
      .min(6, "A senha deve ter no mínimo 6 caracteres."),
    cnpj: yup
      .string()
      .required("O campo CNPJ é obrigatorio.")
      .matches(/^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/, "Passe um CNPJ válido."),
    cidade: yup.string().required("O campo cidade é obrigatorio."),
    rua: yup.string().required("O campo rua é obrigatorio."),
    bairro: yup.string().required("O campo bairro é obrigatorio."),
    numero: yup
      .number("O número precisa ser um número")
      .required("O campo numero é obrigatorio."),
  });

  async function sendDate(event) {
    event.preventDefault();
    const valores = { nome, email, senha, cnpj, cidade, rua, bairro, numero };
    schema
      .validate(valores, { abortEarly: false })
      .then((valid) => {
        cadastrarLoja(nome, email, senha, cnpj, cidade, rua, bairro, numero);
        setData(true);
      })
      .catch((err) => {
        setError(err.errors[0]);
        console.log(err.errors);
      });
  }

  useEffect(() => {
    if (data) {
      navigate("/login");
      setData(false);
    }
  }, [data, navigate]);

  return (
    <FormL onSubmit={sendDate} value={value}>
      <Titulo>Loja</Titulo>
      <SeguraInput width="100%">
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <Input
          width="80%"
          placeholder="Nome da Loja"
          type="text"
          name="loja"
          id="loja"
          value={nome}
          onChange={({ target }) => setNome(target.value)}
        />
      </SeguraInput>
      <SeguraInput width="100%">
        <Input
          width="80%"
          placeholder="Email"
          autoComplete="new-email"
          type="email"
          name="emailLoja"
          id="emailLoja"
          value={email}
          onChange={({ target }) => setEmail(target.value)}
        />
      </SeguraInput>
      <SeguraInput width="100%">
        <Input
          width="80%"
          placeholder="Senha"
          autoComplete="new-password"
          type="password"
          name="senhaLoja"
          id="senhaLoja"
          value={senha}
          onChange={({ target }) => setSenha(target.value)}
        />
      </SeguraInput>
      <SeguraInput width="100%">
        <Input
          width="80%"
          placeholder="Cnpj"
          type="text"
          name="cnpj"
          id="cnpj"
          value={cnpj}
          onChange={({ target }) => setCnpj(target.value)}
        />
      </SeguraInput>
      <SeguraInput width="100%">
        <Input
          width="80%"
          placeholder="Cidade"
          name="cidadeLoja"
          id="cidadeLoja"
          value={cidade}
          onChange={({ target }) => setCidade(target.value)}
        />
      </SeguraInput>
      <SeguraInput width="100%">
        <Input
          width="80%"
          placeholder="Rua"
          name="ruaLoja"
          id="ruaLoja"
          value={rua}
          onChange={({ target }) => setRua(target.value)}
        />
      </SeguraInput>
      <SeguraInput direction="row" width="100%">
        <Input
          width="55%"
          placeholder="Bairro"
          name="bairroLoja"
          id="bairroLoja"
          value={bairro}
          onChange={({ target }) => setBairro(target.value)}
        />
        <Input
          type="tel"
          width="20%"
          placeholder="Número"
          name="numero"
          id="numero"
          value={numero}
          onChange={({ target }) => setNumero(target.value)}
        />
      </SeguraInput>
      <ButtonEnviar>Enviar</ButtonEnviar>
    </FormL>
  );
};

export default FormLoja;
