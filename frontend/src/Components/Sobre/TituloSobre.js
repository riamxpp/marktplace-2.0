import styled from "styled-components";

const TituloSobre = styled.h1`
  font-size: 2rem;
  padding: 1rem 0 0 0;
  border-bottom: 2px solid #3337de;
  color: ${({ color }) => (color ? color : "#333")};
`;

export default TituloSobre;
