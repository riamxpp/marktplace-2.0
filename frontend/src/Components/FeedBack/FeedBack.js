import React, { useState } from "react";
import styled from "styled-components";
import * as yup from "yup";
import Button from "../Form/Button";
import Form from "../Form/Form";
import Input from "../Form/Input";
import Label from "../Form/Label";
import Textarea from "../Form/Textarea";
import Header from "../Header/Header";
import TituloH1 from "../Reutilizavel/TituloH1";
import Footer from "../Footer/Footer";
import ErrorMessage from "../Login/ErrorMessage";

const FeedBackSection = styled.section`
  width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const FeedBack = () => {
  const [nome, setNome] = useState("");
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const schema = yup.object().shape({
    nome: yup.string().required("O campo nome é obrigatorio."),
    feedback: yup.string().required("O campo feedback é obrigatorio."),
  });

  function enviaDados(event) {
    event.preventDefault();

    schema
      .validate({ nome, feedback }, { abortEarly: false })
      .then((valid) => {
        console.log(valid);
      })
      .catch((err) => {
        setError(err.errors[0]);
        console.log(err.errors);
      });
  }

  return (
    <>
      <Header />
      <FeedBackSection>
        <TituloH1 size="2rem" color="#fff">
          Nos dê seu feedback!
        </TituloH1>
        <Form onSubmit={enviaDados} gap="1rem" alignItems="center">
          {error && <ErrorMessage>{error}</ErrorMessage>}
          <Label width="52%">
            Nome
            <Input
              value={nome}
              onChange={({ target }) => setNome(target.value)}
              placeholder="Nome"
              width="95%"
            />
          </Label>
          <Label width="52%">
            Feedback
            <Textarea
              value={feedback}
              onChange={({ target }) => setFeedback(target.value)}
              width="95%"
              rows="10"
            />
          </Label>
          <Button border="true">Enviar</Button>
        </Form>
      </FeedBackSection>
      <Footer />
    </>
  );
};

export default FeedBack;
