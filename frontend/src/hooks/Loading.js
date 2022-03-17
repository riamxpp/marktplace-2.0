import styled from "styled-components";

const Loading = styled.div`
  width: 4rem;
  height: 4rem;
  background: transparent;
  border-radius: 50%;
  border: 6px solid #7145f5;
  border-top-color: #e5e5e5;
  animation: giraLoading 1s infinite;
  @keyframes giraLoading {
    to {
      transform: rotate(1turn);
    }
  }
`;

export default Loading;
