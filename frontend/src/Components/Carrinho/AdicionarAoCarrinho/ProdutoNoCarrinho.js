import styled from "styled-components";

const ProdutoNoCarrinho = styled.article`
  width: 100%;
  height: 6rem;
  border-top: 2px solid #e7e7e7;
  border-bottom: ${({ bottom }) => (bottom ? "2px solid #e7e7e7" : "")};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  @media (max-width: 500px) {
    height: auto;
    flex-direction: column;
    gap: 1rem;
  }
`;

export default ProdutoNoCarrinho;
