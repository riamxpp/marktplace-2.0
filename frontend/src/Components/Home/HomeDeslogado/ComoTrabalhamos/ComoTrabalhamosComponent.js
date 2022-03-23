import React from "react";
import ComoTrabalhamos from "./ComoTrabalhamos";
import Trabalho from "./Trabalho";
import TituloH2 from "../../../Reutilizavel/TituloH2";
import TextoValoresComoTrabalhamos from "./TextoValoresComoTrabalhamos";

const ComoTrabalhamosComponent = () => {
  return (
    <>
      <ComoTrabalhamos>
        <Trabalho>
          <TituloH2>Missão</TituloH2>
          <TextoValoresComoTrabalhamos>
            Lorem ipsum faucibus aenean mmodo eros hendrerit, quis eget cras
            donec accumsan torquent odio elit.
          </TextoValoresComoTrabalhamos>
        </Trabalho>
        <Trabalho>
          <TituloH2>Objetivo</TituloH2>
          <TextoValoresComoTrabalhamos>
            Lorem ipsum faucibus aenean mmodo eros hendrerit, quis eget cras
            donec accumsan torquent odio elit.
          </TextoValoresComoTrabalhamos>
        </Trabalho>
        <Trabalho>
          <TituloH2>Valor</TituloH2>
          <TextoValoresComoTrabalhamos>
            Lorem ipsum faucibus aenean mmodo eros hendrerit, quis eget cras
            donec accumsan torquent odio elit.
          </TextoValoresComoTrabalhamos>
        </Trabalho>
      </ComoTrabalhamos>
    </>
  );
};

export default ComoTrabalhamosComponent;
