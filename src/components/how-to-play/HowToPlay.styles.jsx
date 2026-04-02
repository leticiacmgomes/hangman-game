import { styled } from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(2, auto);
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    justify-content: initial;
  }
`;

export const Title = styled.h2`
  font-size: 48px;
  text-transform: uppercase;
  background: linear-gradient(180deg, #67b6ff 16.42%, #ffffff 100%);
  background-clip: text;
  color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 104px;
  }
`;

export const InstructionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-self: center;

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const InstructionStep = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  padding: 2rem;
  display: grid;
  row-gap: 1.5rem;
  column-gap: 0.8rem;
  grid-template: repeat(2, auto) / 1.5rem auto;
  grid-template-areas:
    "number title"
    "desc desc";

  @media screen and (min-width: 769px) {
    padding: 3rem;
    font-size: 20px;
    grid-template-areas:
      "number title"
      "number desc";
    column-gap: 2rem;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 550px;
    grid-template: repeat(3, auto) / auto;
    grid-template-areas:
      "number"
      "title"
      "desc";
    justify-items: center;
  }
`;

export const StepTitle = styled.h3`
  font-size: 24px;
  text-transform: uppercase;
  color: #261676;
  grid-area: title;

  @media screen and (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Number = styled.span`
  font-size: 24px;
  color: #2463ff;
  grid-area: number;
  place-self: center;

  @media screen and (min-width: 768px) {
    font-size: 88px;
  }
`;

export const Description = styled.p`
  font-size: 16px;
  color: #887dc0;
  grid-area: desc;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
    @media screen and (min-width: 1440px) {
    text-align: center;
    font-size: 26px;
  }
`;
