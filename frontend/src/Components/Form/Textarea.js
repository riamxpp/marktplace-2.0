import styled from "styled-components";

const Textarea = styled.textarea`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 2px;
  border: 2px solid #3337de;
  padding-left: ${({ padding }) => (padding ? padding : "0.5rem")};
  &:focus {
    outline: 2px solid #7533de;
    border: 2px solid transparent;
  }
`;

export default Textarea;
