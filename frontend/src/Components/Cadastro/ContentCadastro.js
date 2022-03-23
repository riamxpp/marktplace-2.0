import styled from "styled-components";

const ContentCadastro = styled.section`
  width: 90%;
  height: auto;
  padding: 1.3rem;
  margin: 0;
  display: flex;
  gap: 6rem;
  @media (max-width: 600px) {
    gap: 1rem;
    height: auto;
    flex-direction: column;
    width: 85%;
  }
`;

export default ContentCadastro;
