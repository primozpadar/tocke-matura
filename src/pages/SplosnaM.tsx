import React, { useState, useContext } from "react";

import Grid from "../components/Grid";
import Card from "../components/Card";
import Dropdown from "../components/Dropdown";
import InputNumber from "../components/InputNumber";
import TockeBar from "../components/TockeBar";

import { SplosnaContext } from "../contexts/SplosnaContext";

const SplosnaM: React.FC = () => {
  const [omejitev, setOmejitev] = useState<number>(100);

  const { totalT } = useContext(SplosnaContext);

  return (
    <>
      <Grid>
        <Card h="Maturitetne ocene - 60%">
          <Dropdown spl tocke8 keyD="slo" label="Slovenščina" />
          <Dropdown spl tocke8 keyD="mat" label="Matematika" />
          <Dropdown spl tocke8 keyD="tuj" label="1. tuj jezik" />
          <Dropdown spl tocke8 keyD="izb1" label="1. izbirni predmet" />
          <Dropdown spl keyD="izb2" label="2. izbirni predmet" />
        </Card>
        <Card h="Splošni učni uspeh - 40%">
          <Dropdown spl keyD="letnik3" label="3. letnik" />
          <Dropdown spl keyD="letnik4" label="4. letnik" />
        </Card>
        <Card h="Omejitev za fakulteto">
          <InputNumber value={omejitev} onChange={e => setOmejitev(Number(e.target.value))} />
        </Card>
      </Grid>
      <TockeBar tocke={totalT} omejitev={omejitev} />
    </>
  );
};

export default SplosnaM;
