import styled from "styled-components";

const WrapperDepoimentos = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  gap: 1rem;
  transform: ${({ translate }) => translate};
  transition: 0.3s ease-in-out;
`;

export default WrapperDepoimentos;
