import styled from "styled-components";

const Input = styled.input`
  width: ${({ width }) => width};
  height: 1.5rem;
  border-radius: 4px;
  border: 2px solid #3337de;
  padding-left: 0.5rem;
  &:focus {
    outline: 2px solid #7533de;
    border: 2px solid transparent;
  }
`;

export default Input;
