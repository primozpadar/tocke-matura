import React, { useContext, useState } from "react";
import styled from "styled-components";

import Card from "../components/Card";
import Grid from "../components/Grid";
import Radio from "../components/Radio";
import Dropdown from "../components/Dropdown";
import InputNumber from "../components/InputNumber";
import { PoklicnaContext } from "../contexts/PoklicnaContext";

import { IMozneTocke } from "../types/TockeTypes";
import TockeBar from "../components/TockeBar";

const PoklicnaM: React.FC = () => {
  const [omejitev, setOmejitev] = useState<number>(100);
  const { tocke, setTocke, mozneTocke, setMozneTocke, totalT } = useContext(PoklicnaContext);

  const handleRadio = (val: IMozneTocke) => {
    if (val === 23) return setMozneTocke(val);
    setMozneTocke(val);
    setTocke({ ...tocke, slo: 2 });
  };

  return (
    <>
      <Grid>
        <Card h="Maturitetne ocene - 60%">
          <RadioContainer>
            <Radio checked={mozneTocke === 20} onClick={() => handleRadio(20)} label="20 točk" />
            <Radio checked={mozneTocke === 23} onClick={() => handleRadio(23)} label="23 točk" />
          </RadioContainer>
          <Dropdown keyD="slo" label="Slovenščina" tocke8={mozneTocke === 23} />
          <Dropdown keyD="stro" label="Strokovno-teor. predmet" />
          <Dropdown keyD="izb1" label="1. izbirni predmet" />
          <Dropdown keyD="izb2" label="2. izbirni predmet" />
        </Card>
        <Card h="Splošni učni uspeh - 40%">
          <Dropdown keyD="letnik3" label="3. letnik" />
          <Dropdown keyD="letnik4" label="4. letnik" />
        </Card>
        <Card h="Omejitev za fakulteto">
          <InputNumber value={omejitev} onChange={e => setOmejitev(Number(e.target.value))} />
        </Card>
      </Grid>
      <TockeBar tocke={totalT} omejitev={omejitev} />
    </>
  );
};

const RadioContainer = styled.div`
  display: flex;
`;

export default PoklicnaM;
