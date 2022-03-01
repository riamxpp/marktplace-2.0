import styled from "styled-components";

const TituloSobre = styled.h1`
  font-size: 2rem;
  padding: ${({ padding }) => padding};
  border-bottom: ${({ border }) => border};
  color: ${({ color }) => color};
`;

export default TituloSobre;
