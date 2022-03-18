import styled from "styled-components";

const ContainerMostraProdutosCarrinho = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  grid-column: 1;
  background: #fff;
  padding: 1rem;
  border-radius: 2px;

  @media (max-width: 800px) {
    grid-column: 1;
    grid-row: 1;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;

export default ContainerMostraProdutosCarrinho;
