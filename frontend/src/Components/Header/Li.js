import styled from "styled-components";

const Li = styled.li`
  display: block;
  @media (max-width: 550px) {
    display: ${({ display }) => (display ? "block" : "none")};
  }
`;

export default Li;
