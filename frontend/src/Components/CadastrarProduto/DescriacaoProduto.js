import styled from "styled-components";

const DescricaoProduto = styled.textarea`
  width: ${({width}) => width ? width : '10.5rem'};
  height: 3rem;
  border-radius: 4px;
  border: 2px solid #3337de;
  padding-left: ${({ padding }) => (padding ? padding : "0.5rem")};
  &:focus {
    outline: 2px solid #7533de;
    border: 2px solid transparent;
  }
`;

export default DescricaoProduto;
