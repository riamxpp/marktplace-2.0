import styled from "styled-components";

const Content = styled.section`
  width: 100%;
  height: auto;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-color: #91909067;
  filter: grayscale(60%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1.5rem 0;
`;

export default Content;
