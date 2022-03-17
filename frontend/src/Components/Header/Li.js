import styled from "styled-components";

const Li = styled.li`
  display: block;
  display: flex;
  align-items: center;
  @media (max-width: 550px) {
    display: ${({ display }) => (display ? "block" : "none")};
  }
`;

export default Li;
