import styled from "styled-components";

const EstoqueCarrinho = styled.span`
  color: ${({ estoque }) => (estoque !== 0 ? "green" : "red")};
  font-size: 0.7rem;
`;

export default EstoqueCarrinho;
