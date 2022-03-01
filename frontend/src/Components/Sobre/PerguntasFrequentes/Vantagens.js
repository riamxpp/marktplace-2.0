import React from "react";

import TituloSobre from "../TituloSobre";
import PerguntaResposta from "./PerguntaResposta";
import PerguntasFrequentesSection from "./PerguntasFrequentesSection";

const Vantagens = () => {
  return (
    <>
      <PerguntasFrequentesSection>
        <TituloSobre color="#fff">Perguntas frequentes!</TituloSobre>
        <PerguntaResposta
          pergunta="Quais vantagens do marktplace"
          resposta=" Lorem ipsum mollis ligula nec nostra suspendisse ad gravida
            venenatis ad lacus donec vitae, dapibus magna ante hac nam magna
            nostra enim."
        ></PerguntaResposta>
        <PerguntaResposta
          pergunta="Quantas lojas estão cadastradas"
          resposta=" Lorem ipsum mollis ligula nec nostra suspendisse ad gravida
            venenatis ad lacus donec vitae, dapibus magna ante hac nam magna
            nostra enim."
        ></PerguntaResposta>
        <PerguntaResposta
          pergunta="Quantos clientes estão cadastrados"
          resposta=" Lorem ipsum mollis ligula nec nostra suspendisse ad gravida
            venenatis ad lacus donec vitae, dapibus magna ante hac nam magna
            nostra enim."
        ></PerguntaResposta>
      </PerguntasFrequentesSection>
    </>
  );
};

export default Vantagens;
