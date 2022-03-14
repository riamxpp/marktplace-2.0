import styled from "styled-components";

const Form = styled.form`
  height: auto;
  padding: 2rem 1rem;
  background: #fff;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  justify-content: ${({ justifyContent }) => justifyContent};
  align-items: ${({ alignItems }) => alignItems};
  gap: ${({ gap }) => gap};
`;

export default Form;
