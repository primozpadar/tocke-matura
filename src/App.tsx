import React, { useState } from "react";
import styled from "styled-components";

// components
import Radio from "./components/Radio";

// pages
import PoklicnaM from "./pages/PoklicnaM";
import SplosnaM from "./pages/SplosnaM";
import PoklicnaContextProvider from "./contexts/PoklicnaContext";

enum IMatura {
  SPLOSNA = "splosna",
  POKLICNA = "poklicna",
}

const App: React.FC = () => {
  const [matura, setMatura] = useState<IMatura>(IMatura.POKLICNA);

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
      {matura === IMatura.SPLOSNA && <SplosnaM />}
      {matura === IMatura.POKLICNA && (
        <PoklicnaContextProvider>
          <PoklicnaM />
        </PoklicnaContextProvider>
      )}
    </>
  );
};

const Card = styled.div`
  background: var(--rdeca);
  display: flex;
  padding: 1rem;
`;

export default App;
