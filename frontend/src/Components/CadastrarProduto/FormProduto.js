import styled from "styled-components";

const FormProduto = styled.form`
  width: 30rem;
  height: auto;
  background-color: #fff;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  border-radius: 4px;
  padding: 1rem;
  margin-bottom: 2rem;
  @media (max-width: 550px) {
    width: 20rem;
  }
`;

export default FormProduto;
