import styled from "styled-components";

const InputNumber = styled.input.attrs({ type: "number", min: "0", max: "100" })`
  border-radius: 0.2rem;
  padding: 0.25rem;
  width: 5rem;
`;

export default InputNumber;
