import { BackButton } from "../ui/BackButton";

import {
  Header,
  Title,
  InstructionsContainer,
  InstructionStep,
  StepTitle,
  Number,
  Description,
} from "./HowToPlay.styles";

export const HowToPlay = () => {
  const instructions = [
    {
      id: '01',
      title: "Choose a category",
      description:
        "First, choose a word category, like animals or movies. The computer then randomly selects a secret word from that topic and shows you blanks for each letter of the word.",
    },
    {
      id: '02',
      title: "Guess letters",
      description:
        "Take turns guessing letters. The computer fills in the relevant blank spaces if your guess is correct. If it’s wrong, you lose some health, which empties after eight incorrect guesses.",
    },
    {
      id: '03',
      title: "Win or lose",
      description:
        "You win by guessing all the letters in the word before your health runs out. If the health bar empties before you guess the word, you lose.",
    },
  ];
  return (
    <>
      <Header>
        <BackButton path="/" />
        <Title>how to play</Title>
      </Header>
      <InstructionsContainer>
        {instructions.map(({ id, title, description }) => (
          <InstructionStep key={id}>
            <Number>{id}</Number>
            <StepTitle>{title}</StepTitle>

            <Description>{description}</Description>
          </InstructionStep>
        ))}
      </InstructionsContainer>
    </>
  );
};
