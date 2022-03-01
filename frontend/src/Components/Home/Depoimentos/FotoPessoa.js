import styled from "styled-components";

const FotoPessoa = styled.article`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: 50%;
  transform: scale(${({ atual }) => (atual ? "2" : "1.6")});
  @media (max-width: 700px) {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

export default FotoPessoa;
