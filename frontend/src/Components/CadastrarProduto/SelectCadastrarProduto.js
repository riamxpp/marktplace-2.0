import styled from "styled-components";

const SelectCategoria = styled.select`
  border-radius: 4px;
  height: 1.5rem;
  border: 2px solid #3337de;
  &:focus {
    outline: 2px solid #7533de;
    border: 2px solid transparent;
  }
`;

export default SelectCategoria;
