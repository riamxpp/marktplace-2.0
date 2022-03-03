import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../../api/api";

import Input from "../../Form/Input";
import SeguraInput from "../../Geral/SeguraInput";
import Titulo from "../../Geral/Titulo";
import ButtonEnviar from "../ButtonEnviar";

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
  const navigate = useNavigate();

  async function sendDate(event) {
    event.preventDefault();
    const dados = { nome, email, senha, cnpj, cidade, rua, bairro, numero };
    const dateLoja = await api
      .post("/cadastrar-loja", dados)
      .then((response) => response)
      .catch((error) => error);
    setData(dateLoja);
  }

  useEffect(() => {
    if (data) {
      navigate("/login");
    }
  }, [data, navigate]);

  return (
    <FormL onSubmit={sendDate} value={value}>
      <Titulo>Loja</Titulo>
      <SeguraInput width="100%">
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
      <SeguraInput width="100%">
        <Input
          width="50%"
          placeholder="Bairro"
          name="bairroLoja"
          id="bairroLoja"
          value={bairro}
          onChange={({ target }) => setBairro(target.value)}
        />
        <Input
          width="25%"
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
