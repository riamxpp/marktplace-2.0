import styled from "styled-components";

const Container = styled.div`
  width: 60.5rem;
  height: 18rem;
  padding: 1rem;
  margin: 0 auto;
  background-color: #e7e7e7;
  border-radius: 4px;
  position: relative;
  @media (max-width: 1050px) {
    width: 45rem;
  }
  @media (max-width: 900px) {
    width: 30rem;
  }
  @media (max-width: 690px) {
    width: 24rem;
  }
`;

export default Container;
