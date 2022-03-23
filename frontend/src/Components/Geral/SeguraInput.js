import styled from "styled-components";

const SeguraInput = styled.div`
  width: ${({ width }) => width};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: ${({ direction }) => (direction ? direction : "column")};
  gap: ${({ gap }) => (gap ? gap : "0.5rem")};
`;

export default SeguraInput;
