import styled from "styled-components";

const AnimacaoAdicionaAoCarrinho = styled.div`
  height: 100%;
  width: 100%;
  z-index: 2;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  display: ${({display}) => display ? 'flex': "none" };
  animation: 'animaTexto 1s ease';
  @keyframes animaTexto {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }to {
      opacity: initial;
      transform: translateX(initial);
    }
  }
`;

export default AnimacaoAdicionaAoCarrinho