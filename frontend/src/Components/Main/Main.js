import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  height: ${({ height }) => (height ? height : "auto")};
`;

export default Main;
