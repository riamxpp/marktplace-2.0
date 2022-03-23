import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ContentDepoimentos from "./ContentDepoimentos";
import Depoimento from "./Depoimento";

import pessoa1 from "../../../../assents/img/home/person-1.jpg";
import pessoa2 from "../../../../assents/img/home/person-2.jpg";
import pessoa3 from "../../../../assents/img/home/person-3.jpg";
import Paragrafo from "./Paragrafo";
import Pessoa from "./Pessoa";
import TituloDepoimentos from "./TituloDepoimentos";
import WrapperDepoimentos from "./WrapperDepoimentos";
import ContentFotoPessoa from "./ContentFotoPessoa";
import FotoPessoa from "./FotoPessoa";
import useDebounce from "../../../../hooks/useDebounce";

const Depoimentos = styled.section`
  width: 100%;
  height: auto;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
  border-radius: 4px;
`;

const DepoimentosComponent = () => {
  const [depoimentoAtual, setDepoimentoAtual] = useState({
    pessoa1: false,
    pessoa2: true,
    pessoa3: false,
  });
  const [movimento, setMovimento] = useState(0);
  const [movimentoDepoimento, setMovimentoDepoimento] = useState(0);
  const pessoaRef = useRef(null);
  const depoimentoRef = useRef(null);

  const movimentaPessoa2Debounce = useDebounce(movimentaPessoa2, 500);

  useEffect(() => {
    let arrumaSlide = setInterval(() => {
      window.addEventListener("resize", movimentaPessoa2Debounce);
    }, 500);
    return () => {
      clearInterval(arrumaSlide);
      window.addEventListener("resize", movimentaPessoa2Debounce);
    };
  }, []);

  function movimentaPessoa1() {
    setMovimento(pessoaRef.current.offsetWidth);

    setDepoimentoAtual({
      pessoa1: true,
      pessoa2: false,
      pessoa3: false,
    });
    setMovimentoDepoimento(0);
  }
  function movimentaPessoa2() {
    setMovimento(0);
    setDepoimentoAtual({
      pessoa1: false,
      pessoa2: true,
      pessoa3: false,
    });
    if (depoimentoRef.current.offsetWidth)
      setMovimentoDepoimento(-(depoimentoRef.current.offsetWidth + 16));
  }

  function movimentaPessoa3() {
    setMovimento(-pessoaRef.current.offsetWidth);

    setDepoimentoAtual({
      pessoa1: false,
      pessoa2: false,
      pessoa3: true,
    });
    setMovimentoDepoimento(2 * -(depoimentoRef.current.offsetWidth + 16));
  }
  return (
    <Depoimentos>
      <ContentDepoimentos>
        <Pessoa translate={`translateX(${movimento}px)`}>
          <ContentFotoPessoa
            ref={pessoaRef}
            url={pessoa1}
            onClick={movimentaPessoa1}
          >
            <FotoPessoa url={pessoa1} atual={depoimentoAtual.pessoa1} />
          </ContentFotoPessoa>
          <ContentFotoPessoa url={pessoa2} onClick={movimentaPessoa2}>
            <FotoPessoa url={pessoa2} atual={depoimentoAtual.pessoa2} />
          </ContentFotoPessoa>
          <ContentFotoPessoa url={pessoa3} onClick={movimentaPessoa3}>
            <FotoPessoa url={pessoa3} atual={depoimentoAtual.pessoa3} />
          </ContentFotoPessoa>
        </Pessoa>

        <WrapperDepoimentos translate={`translateX(${movimentoDepoimento}px)`}>
          <Depoimento ref={depoimentoRef}>
            <TituloDepoimentos>Maria Lucia</TituloDepoimentos>
            <Paragrafo>
              Lorem ipsum faucibus aenean class potenti aenean porttitor commodo
              eros hendrerit, quis eget cras donec accumsan torquent odio elit
              consequat quisque, auctor praesent sollicitudin condimentum massa
              netus congue eros tempus. litora egestas euismod vehicula
              eleifend.
            </Paragrafo>
          </Depoimento>
          <Depoimento>
            <TituloDepoimentos>Vitória Souza</TituloDepoimentos>
            <Paragrafo>
              Lorem ipsum faucibus aenean class potenti aenean porttitor commodo
              eros hendrerit, quis eget cras donec accumsan torquent odio elit
              consequat quisque, auctor praesent sollicitudin condimentum massa
              netus congue eros tempus. litora egestas euismod vehicula eleifend
              pharetra nulla turpis porta senectus libero, imperdiet congue
              ornare sagittis fames congue netus nostra litora.
            </Paragrafo>
          </Depoimento>
          <Depoimento>
            <TituloDepoimentos>Pedro Lucas</TituloDepoimentos>
            <Paragrafo>
              Lorem ipsum faucibus aenean class potenti aenean porttitor commodo
              eros hendrerit, quis eget cras donec accumsan torquent odio elit.
            </Paragrafo>
          </Depoimento>
        </WrapperDepoimentos>
      </ContentDepoimentos>
    </Depoimentos>
  );
};

export default DepoimentosComponent;
