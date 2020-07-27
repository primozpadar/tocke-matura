import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1rem;
  margin: 1rem;

  @media (max-width: 350px) {
    margin: 1rem 0;
  }
`;

export default Grid;
