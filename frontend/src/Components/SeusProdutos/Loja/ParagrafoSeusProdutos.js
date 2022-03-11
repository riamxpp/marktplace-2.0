import styled from "styled-components";

const ParagrafoSeusProdutos = styled.p`
  line-height: 1.2;
  font-size: ${({ size }) => size};
  font-weight: ${({ weight }) => weight};
  color: ${({ color }) => color};
  font-style: ${({ fstyle }) => fstyle};
  margin-top: ${({ marginT }) => marginT};
`;

export default ParagrafoSeusProdutos;
