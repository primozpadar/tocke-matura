import React, { useContext } from "react";
import styled from "styled-components";

import { IPoklicnaKeys, ISplosnaKeys } from "../types/TockeTypes";
import { SplosnaContext } from "../contexts/SplosnaContext";
import { PoklicnaContext } from "../contexts/PoklicnaContext";

interface Props {
  tocke8?: boolean;
  label: string;
  keyD: IPoklicnaKeys | ISplosnaKeys;
  spl?: boolean;
}

const Dropdown = ({ tocke8, label, keyD, spl }: Props) => {
  const _contextPoklicna = useContext(PoklicnaContext);
  const _contextSplosna = useContext(SplosnaContext);
  const { tocke, setTocke } = spl ? _contextSplosna : _contextPoklicna;

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
