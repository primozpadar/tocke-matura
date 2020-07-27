import React, { useContext } from "react";
import styled from "styled-components";
import { PoklicnaContext } from "../contexts/PoklicnaContext";

import { ITockeKeys } from "../types/PoklicnaTypes";

interface Props {
  tocke8?: boolean;
  label: string;
  keyD: ITockeKeys;
}

const Dropdown = ({ tocke8, label, keyD }: Props) => {
  const { tocke, setTocke } = useContext(PoklicnaContext);

  const changeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = Number(e.target.value);
    setTocke({ ...tocke, [keyD]: val });
  };

  return (
    <Container>
      <select id={label} onChange={changeHandler} value={tocke[keyD]}>
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
