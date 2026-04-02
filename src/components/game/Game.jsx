import { useGameStore } from "../../store/gameStore";
import { Alphabet } from "./alphabet/Alphabet";
import { PauseMenu } from "./pause-menu/PauseMenu";
import { ResultModal } from "./result-modal/ResultModal";
import {
  GameContainer,
  Header,
  InputContainer,
  LetterBox,
  MenuIcon,
  Title,
} from "./Game.styles";
import { Life } from "./life/Life";

export const Game = () => {
  const { randomWord, currentCategory, attempts, isPaused, setIsPaused, isVictory, isDefeat } =
    useGameStore();
  const letters = randomWord.name.split("");

  return (
    <GameContainer>
      <Header>
        <MenuIcon onClick={() => setIsPaused(true)} />
        <Title>{currentCategory}</Title>
        <Life />
        
      </Header>
      <InputContainer>
        {letters.map((letter, index) => (
          <LetterBox key={index} $isEmpty={letter === " "}>
            {attempts.includes(letter) ? letter : ""}
          </LetterBox>
        ))}
      </InputContainer>
      <Alphabet />
      {
        isPaused && <PauseMenu />
      }
      {
       ( isVictory || isDefeat) && <ResultModal />
      }
    </GameContainer>
  );
};
