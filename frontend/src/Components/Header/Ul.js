import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: start;
  right: initial;
  z-index: 1;
  @media (max-width: 550px) {
    width: 7rem;
    flex-direction: column;
    top: 0%;
    right: 0%;
    gap: 0.7rem 0;
    background-color: #e7e7e7;
    position: absolute;
    padding: 1.7rem 1rem 0.5rem 0.5rem;
    border-radius: 4px;
    box-shadow: ${({ shadow }) =>
      shadow && "0px 0px 9px 0px  rgba(0, 0, 0, 0.7)"};
  }
`;

export default Ul;
