import styled from "styled-components";

const QuemSomos = styled.section`
  padding: 4rem 0;
  display: grid;
  grid-template-columns: repeat(3, minmax(10rem, 1fr));
  gap: 1rem;
  justify-items: center;
  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem 0;
  }
  @media (max-width: 530px) {
    grid-template-columns: 1fr;
  }
`;

export default QuemSomos;
