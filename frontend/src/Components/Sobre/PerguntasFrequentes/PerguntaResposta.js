import { useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Pergunta from "./Pergunta";
import Resposta from "./Resposta";
import Texto from "./Texto";

const ContentPerguntasFrequentes = styled.article`
  width: 80%;
  background-color: #fff;
  padding: 1.5rem 1rem;
  border-radius: 4px;
`;

const PerguntaResposta = ({ pergunta, resposta }) => {
  const [activeResponse, setActiveResponse] = useState(false);

  function mostraResposta() {
    setActiveResponse((prev) => !prev);
  }

  return (
    <>
      <ContentPerguntasFrequentes >
        <Pergunta onClick={mostraResposta}>
          <Texto>{pergunta}</Texto>
          <Button>{activeResponse ? "-" : "+"}</Button>
        </Pergunta>
        <Resposta display={activeResponse ? "block" : "none"}>
          {resposta}
        </Resposta>
      </ContentPerguntasFrequentes>
    </>
  );
};

export default PerguntaResposta;
