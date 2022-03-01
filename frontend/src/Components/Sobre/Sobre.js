import React from "react";
import Header from "../Header/Header";

import background from "../../assents/img/sobre/plano-de-fundo-da-cyber.jpg";
import Content from "./SobreNos/Content";
import TituloSobre from "./TituloSobre";
import TextoSobre from "./TextoSobre";
import QuemSomos from "./QuemSomos/QuemSomos";
import ContentQuemSomos from "./QuemSomos/ContentQuemSomos";
import TituloSecundarioSobre from "./TituloSecundarioSobre";
import SubContentQuemSomos from "./QuemSomos/SubContentQuemSomos";
import Vantagens from "./PerguntasFrequentes/Vantagens";
import SeguraContent from "./QuemSomos/SeguraContent";
import Footer from "../Footer/Footer";

const Sobre = () => {
  return (
    <>
      <Header></Header>
      <Content url={background}>
        <TituloSobre border="2px solid #3337de" padding=" 2rem 0">
          Sobre nos
        </TituloSobre>
        <TextoSobre width="55%">
          Lorem ipsum mollis ligula nec nostra suspendisse ad gravida venenatis
          ad lacus donec vitae, dapibus magna ante hac nam magna nostra enim
          mauris praesent ligula hac. nisi felis dictum imperdiet libero ligula
          dui eleifend dictumst feugiat maecenas turpis, nisi vitae elit.{" "}
        </TextoSobre>
        <TextoSobre width="55%">
          Lorem ipsum mollis ligula nec nostra suspendisse ad gravida venenatis
          ad lacus donec vitae, dapibus magna ante hac nam magna nostra enim.
        </TextoSobre>
      </Content>
      <QuemSomos>
        <ContentQuemSomos>
          <SeguraContent>
            <TituloSobre border="none">Quem</TituloSobre>
            <TituloSecundarioSobre>Somos</TituloSecundarioSobre>
            <TextoSobre>
              Lorem ipsum mollis ligula nec nostra suspendisse ad gravida
              venenatis ad lacus donec vitae, dapibus magna ante hac nam magna
              nostra enim.
            </TextoSobre>
            <SubContentQuemSomos href="#">A instituição</SubContentQuemSomos>
          </SeguraContent>
        </ContentQuemSomos>
        <ContentQuemSomos>
          <SeguraContent>
            <TituloSobre border="none">Como</TituloSobre>
            <TituloSecundarioSobre>Funciona ?</TituloSecundarioSobre>
            <TextoSobre>
              Lorem ipsum mollis ligula nec nostra suspendisse ad gravida
              venenatis ad lacus donec vitae, dapibus magna ante hac nam magna
              nostra enim.
            </TextoSobre>
            <SubContentQuemSomos href="#">
              Representatividade
            </SubContentQuemSomos>
          </SeguraContent>
        </ContentQuemSomos>
        <ContentQuemSomos>
          <SeguraContent>
            <TituloSobre border="none">Como se</TituloSobre>
            <TituloSecundarioSobre>Associar ?</TituloSecundarioSobre>
            <TextoSobre>
              Lorem ipsum mollis ligula nec nostra suspendisse ad gravida
              venenatis ad lacus donec vitae, dapibus magna ante hac nam magna
              nostra enim.
            </TextoSobre>
            <SubContentQuemSomos href="#">História</SubContentQuemSomos>
          </SeguraContent>
        </ContentQuemSomos>
      </QuemSomos>
      <Vantagens />
      <Footer />
    </>
  );
};

export default Sobre;
