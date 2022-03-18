import styled from "styled-components";

const ContainerEscolheProduto = styled.section`
  width: 90%;
  height: auto;
  margin: 0 auto;
  border-radius: 2px;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 2rem;
  @media (max-width: 800px) {
    width: 80%;
    grid-template-columns: 1fr;
    grid-template-rows: 3fr 1fr;
  }
`;

export default ContainerEscolheProduto;
