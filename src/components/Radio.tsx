import styled from "styled-components";

interface RadioProps {
  checked: boolean;
  label: string;
}

const Radio = styled.button`
  cursor: pointer;
  font-size: 1rem;
  margin: 1rem;
  outline: none;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight:bold;
  color:var(--crna);

  &::before {
    content: "";
    display: inline-block;
    height: 1rem;
    width: 1rem;
    min-width: 1rem;
    border-radius: 50%;
    background: ${(props: RadioProps) => (props.checked ? "var(--crna)" : "var(--rdeca)")};
    border: 3px solid ${(props: RadioProps) => (props.checked ? "  var(--crna)" : "var(--crna)")};
    margin-right: 0.5rem;
  }

  &::after {
    content: "${(props: RadioProps) => props.label}";
  }
`;

export default Radio;
