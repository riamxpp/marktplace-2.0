import styled from "styled-components";

const EstoqueProdutoIndividual = styled.span`
  color: ${({ estoque }) => (estoque ? "green" : "red")};
  font-size: 0.9rem;
  font-style: italic;
  line-height: 1.5;
`;

export default EstoqueProdutoIndividual;
