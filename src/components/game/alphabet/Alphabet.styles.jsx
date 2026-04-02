import { styled } from "styled-components";

export const AlphabetContainer = styled.div`
    display: grid;
    grid-template: repeat(3, auto) / repeat(9, auto);
    gap: 0.5rem;
`;

export const LetterBox = styled.span`
  padding: 1rem 0.6rem;
  font-size: 24px;
  text-transform: uppercase;
  border-radius: 8px;
  background-color: #ffffff;
  color: #261676;
  opacity: ${({ $isActive }) => $isActive ? '1' : '0.25'};

  @media screen and (min-width: 768px) {
    font-size: 48px;
    padding: 1rem 1.5rem;
    border-radius: 24px;
  }

  @media screen and (min-width: 1440px) {

    padding: 1rem 3rem;
  }
`;
