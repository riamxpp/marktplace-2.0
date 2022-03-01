import styled from "styled-components";

const ContentLogin = styled.section`
  width: 90%;
  height: 70vh;
  padding: 1.3rem;
  margin: 0;
  display: flex;
  gap: 6rem;
  @media (max-width: 600px) {
    gap: 1rem;
    flex-direction: column;
    width: 85%;
  }
`;

export default ContentLogin;
