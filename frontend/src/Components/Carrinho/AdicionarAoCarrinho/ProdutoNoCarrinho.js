import styled from "styled-components";

const ProdutoNoCarrinho = styled.article`
  width: 100%;
  height: 8rem;
  border-top: 2px solid #e7e7e7;
  border-bottom: ${({ bottom }) => (bottom ? "2px solid #e7e7e7" : "")};
  display: flex;
  padding: 0.5rem 0;
`;

export default ProdutoNoCarrinho;
