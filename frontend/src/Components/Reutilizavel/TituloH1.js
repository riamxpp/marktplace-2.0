import styled from "styled-components";

const TituloH1 = styled.h1`
  color: ${({ color }) => (color ? color : "#333")};
  font-size: ${({ size }) => (size ? size : "1.5rem")};
  line-height: 1.5;
`;

export default TituloH1;
