import React, { useState } from "react";
import styled from "styled-components";

import Radio from "./components/Radio";

enum IMatura {
  SPLOSNA = "splosna",
  POKLICNA = "poklicna",
}

const App: React.FC = () => {
  const [matura, setMatura] = useState<IMatura>(IMatura.SPLOSNA);

  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.div``;

const Card = styled.div`
  background: var(--rdeca);
  display: flex;
`;

export default App;
