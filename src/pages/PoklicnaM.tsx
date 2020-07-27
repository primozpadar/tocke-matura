import React, { useState } from "react";
import styled from "styled-components";

import Card from "../components/Card";
import Grid from "../components/Grid";
import Radio from "../components/Radio";
import Dropdown from "../components/Dropdown";
import InputNumber from "../components/InputNumber";

type IMozneTocke = 20 | 23;

const PoklicnaM: React.FC = () => {
  const [mozneTocke, setMozneTocke] = useState<IMozneTocke>(20);

  return (
    <Grid>
      <Card h="Maturitetne ocene - 60%">
        <RadioContainer>
          <Radio checked={mozneTocke === 20} onClick={() => setMozneTocke(20)} label="20 točk" />
          <Radio checked={mozneTocke === 23} onClick={() => setMozneTocke(23)} label="23 točk" />
        </RadioContainer>
        <Dropdown label="Slovenščina" tocke8={mozneTocke === 23} />
        <Dropdown label="Strokovno-teor. predmet" />
        <Dropdown label="1. izbirni predmet" />
        <Dropdown label="2. izbirni predmet" />
      </Card>
      <Card h="Splošni učni uspeh - 40%">
        <Dropdown label="3. letnik" />
        <Dropdown label="4. letnik" />
      </Card>
      <Card h="Omejitev za fakulteto">
        <InputNumber />
      </Card>
    </Grid>
  );
};

const RadioContainer = styled.div`
  display: flex;
`;

export default PoklicnaM;
