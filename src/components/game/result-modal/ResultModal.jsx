import { useGameStore } from "../../../store/gameStore";
import {
  WinModalBackground,
  WinModalContainer,
  Title,
  ButtonContainer,
  PlayAgainButton,
  NewCategoryButton,
  QuitGameButton,
} from "./ResultModal.styles";

export const ResultModal = () => {
  const { setRandomWord, isVictory } = useGameStore();

  return (
    <WinModalBackground>
      <WinModalContainer>
        <Title>{ isVictory ? 'you win' : 'you lose' }</Title>
        <ButtonContainer>
          <PlayAgainButton onClick={() => setRandomWord()}>
            play again
          </PlayAgainButton>
          <NewCategoryButton to="/pick-a-category">
            new categoty
          </NewCategoryButton>
          <QuitGameButton to="/">quit game</QuitGameButton>
        </ButtonContainer>
      </WinModalContainer>
    </WinModalBackground>
  );
};
