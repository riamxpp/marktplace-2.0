import React from "react";
import styled from "styled-components";
import Footer from "../Footer/Footer";
import Button from "../Form/Button";
import Form from "../Form/Form";
import Input from "../Form/Input";
import Label from "../Form/Label";
import Textarea from "../Form/Textarea";
import Header from "../Header/Header";
import TituloH1 from "../Reutilizavel/TituloH1";

const FeedBackSection = styled.section`
  width: 40rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
`;

const FeedBack = () => {
  function enviaDados(event) {
    event.preventDefault();
    console.log(event.type);
  }

  return (
    <>
      <Header />
      <FeedBackSection>
        <TituloH1 size="2rem">Nos dê seu feedback!</TituloH1>
        <Form onSubmit={enviaDados} gap="1rem" alignItems="center">
          <Label width="52%">
            Nome
            <Input placeholder="Nome" width="95%" />
          </Label>
          <Label width="52%">
            Feedback
            <Textarea width="95%" rows="10" />
          </Label>
          <Button border="true">Enviar</Button>
        </Form>
      </FeedBackSection>
      <Footer />
    </>
  );
};

export default FeedBack;
