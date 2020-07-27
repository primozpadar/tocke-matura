import React from "react";
import styled from "styled-components";

interface Props {
  tocke8?: boolean;
  label: string;
}

const Dropdown = ({ tocke8, label }: Props) => {
  return (
    <Container>
      <select id={label}>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        {tocke8 ? (
          <>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
          </>
        ) : null}
      </select>
      <label htmlFor={label}>{label}</label>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;

  label {
    margin-left: 0.6rem;
    user-select: none;
  }

  select {
    border-radius: 0.2rem;
    padding: 0.25rem;
  }
`;

export default Dropdown;
