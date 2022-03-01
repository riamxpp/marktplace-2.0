import styled from "styled-components";

const ButtonCliente = styled.button`
  width: 5rem;
  padding: 0.5rem 1rem;
  background: #3a71fa;
  border: ${({ border }) =>
    border === "cliente" ? "2px solid #3337de" : "none"};
  color: #fff;
  font-weight: bold;
  cursor: pointer;
`;

export default ButtonCliente;
