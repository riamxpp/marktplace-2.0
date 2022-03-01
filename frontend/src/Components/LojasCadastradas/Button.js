import styled from "styled-components";

const Button = styled.button`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  margin: 0.4rem;
  /* border: 1px solid #333; */
  border: none;
  background-color: ${({ background }) => background};
  &:hover {
    background-color: lightgray;
  }
`;

export default Button;
