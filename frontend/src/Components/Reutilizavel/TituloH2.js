import styled from "styled-components";

const TituloH2 = styled.h2`
  font-size: ${({ size }) => (size ? size : "1.5rem")};
  line-height: 1.5;
`;

export default TituloH2;
