import React from "react";
import styled from "styled-components";

interface Props {
  tocke: number;
  omejitev: number;
}

const TockeBar = ({ omejitev, tocke }: Props) => {
  return (
    <Container>
      {tocke < omejitev ? (
        <p>
          <span>{tocke}</span> točk, potrebuješ jih še <span>{Number((omejitev - tocke).toFixed(2))}</span> 😬
        </p>
      ) : tocke === omejitev ? (
        <p>
          <span>{tocke}</span> točk, ravno toliko, kot jih potrebuješ 😎
        </p>
      ) : (
        <p>
          <span>{tocke}</span> točk, število odvečnih točk je{" "}
          <span>{Number((tocke - omejitev).toFixed(2))}</span> 🤓
        </p>
      )}
      <BarContainer>
        <Bar val={omejitev} />
        <Bar prim val={tocke} />
      </BarContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 2rem 1rem;

  p {
    color: var(--bela);
    margin: 0 0 0.2rem 0.4rem;
    & span:first-child {
      color: var(--zelena);
    }
    & span:last-child {
      color: var(--rdeca);
    }
    font-size: 1rem;
    @media (max-width: 400px) {
      font-size: 0.85rem;
    }
  }
`;

const BarContainer = styled.div`
  position: relative;
  background: var(--bela);
  height: 1rem;
  border-radius: 0.5rem;
  overflow: hidden;
`;

interface BarProps {
  prim?: boolean;
  val: number;
}

const Bar = styled.div`
  position: absolute;
  height: 100%;
  border-radius: 10rem;
  width: ${(props: BarProps) => `${props.val}%`};
  background: ${(props: BarProps) => (props.prim ? "var(--zelena)" : "var(--rdeca)")};
  z-index: ${(props: BarProps) => (props.prim ? "100" : "10")};

  transition: width 1.4s ease-in-out;
`;

export default TockeBar;
