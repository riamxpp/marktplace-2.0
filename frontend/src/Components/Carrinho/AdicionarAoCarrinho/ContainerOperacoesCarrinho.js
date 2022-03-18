import styled from "styled-components";

const ContainerOperacoesCarrinho = styled.div`
  width: 100%;
  height: 9rem;
  background-color: blue;
  grid-column: 2;
  background: #fff;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  position: relative;
  @media (max-width: 800px) {
    grid-column: 1;
    grid-row: 2;
    width: 15rem;
    justify-content: space-evenly;
  }
`;

export default ContainerOperacoesCarrinho;
