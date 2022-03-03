import styled from "styled-components";

const SeguraInput = styled.div`
  width: ${({ width }) => width};
  /* grid-column: ${({ column }) => column};
  grid-row: ${({ row }) => row}; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ gap }) => (gap ? gap : "0.5rem")};
`;

export default SeguraInput;
