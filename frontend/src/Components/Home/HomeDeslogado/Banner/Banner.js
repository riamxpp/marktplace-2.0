import styled from "styled-components";

const Banner = styled.section`
  width: 100%;
  height: 20rem;
  background-image: url(${({ img }) => img});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Banner;
