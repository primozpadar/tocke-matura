import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
  h: string;
}

const Card = ({ children, h }: Props) => {
  return (
    <Container>
      <h1>{h}</h1>
      <Content>{children}</Content>
    </Container>
  );
};

const Container = styled.div`
  h1 {
    color: var(--bela);
    font-size: 1rem;
    letter-spacing: 1px;
    margin-left: 0.5rem;
  }
`;

const Content = styled.div`
  padding: 1rem;
  background: var(--zelena);
  color: var(--crna);
  border-radius: 0.5rem;
  @media (max-width: 350px) {
    border-radius: 0;
  }
  display: grid;
  gap: 1rem;
`;

export default Card;
