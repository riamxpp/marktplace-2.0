import styled from "styled-components";

const Resposta = styled.div`
  border-top: 1px solid #333;
  padding-top: 1rem;
  display: ${({ display }) => display};
  animation: animeLeft 0.3s forwards ease-in;
  @keyframes animeLeft {
    from {
      opacity: 0;
      transform: translateX(-30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default Resposta;
