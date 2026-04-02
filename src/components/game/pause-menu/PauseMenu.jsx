import { useGameStore } from "../../../store/gameStore";
import {
  ButtonContainer,
  ContinueButton,
  NewCategoryButton,
  PauseMenuBackground,
  PauseMenuContainer,
  QuitGameButton,
  Title,
} from "./PauseMenu.styles";

export const PauseMenu = () => {
  const { setIsPaused } = useGameStore();

  return (
    <PauseMenuBackground>
      {" "}
      <PauseMenuContainer>
        <Title>Paused</Title>
        <ButtonContainer>
          <ContinueButton onClick={() => setIsPaused(false)}>
            continue
          </ContinueButton>
          <NewCategoryButton to="/pick-a-category">
            new category
          </NewCategoryButton>
          <QuitGameButton to="/">quit game</QuitGameButton>
        </ButtonContainer>
      </PauseMenuContainer>
    </PauseMenuBackground>
  );
};
