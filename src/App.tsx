import React, { useState } from "react";
import styled from "styled-components";

// components
import Radio from "./components/Radio";

// pages
import PoklicnaM from "./pages/PoklicnaM";
import SplosnaM from "./pages/SplosnaM";

// context
import PoklicnaContextProvider from "./contexts/PoklicnaContext";
import SplosnaContextProvider from "./contexts/SplosnaContext";

enum IMatura {
  SPLOSNA = "splosna",
  POKLICNA = "poklicna",
}

const App: React.FC = () => {
  const [matura, setMatura] = useState<IMatura>(IMatura.SPLOSNA);

  return (
    <>
      <Card>
        <Radio
          checked={matura === IMatura.SPLOSNA}
          onClick={() => setMatura(IMatura.SPLOSNA)}
          label="Splošna matura"
        />
        <Radio
          checked={matura === IMatura.POKLICNA}
          onClick={() => setMatura(IMatura.POKLICNA)}
          label="Poklicna matura"
        />
      </Card>
      <PoklicnaContextProvider>
        <SplosnaContextProvider>
          {matura === IMatura.SPLOSNA && <SplosnaM />}
          {matura === IMatura.POKLICNA && <PoklicnaM />}
        </SplosnaContextProvider>
      </PoklicnaContextProvider>
    </>
  );
};

const Card = styled.div`
  background: var(--rdeca);
  display: flex;
  padding: 1rem;
`;

export default App;
