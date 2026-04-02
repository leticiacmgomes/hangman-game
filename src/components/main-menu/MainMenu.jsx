import {
  MainMenuContainer,
  PlayButton,
  HowToPlayButton,
} from "./MainMenu.styles";

export const MainMenu = () => {
  return (
    <MainMenuContainer>
      <PlayButton to="/pick-a-category" />
      <HowToPlayButton to="/how-to-play">how to play</HowToPlayButton>
    </MainMenuContainer>
  );
};
