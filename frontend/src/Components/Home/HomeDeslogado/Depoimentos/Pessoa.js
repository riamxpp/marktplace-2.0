import styled from "styled-components";

const Pessoa = styled.div`
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  transform: ${({ translate }) => translate};
  transition: 0.3s;
`;

export default Pessoa;
