import styled from "styled-components";

const LoginArea = styled.section`
  width: 50%;
  border-radius: 4px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 600px) {
    width: 90%;
    justify-content: start;
  }
`;

export default LoginArea;
