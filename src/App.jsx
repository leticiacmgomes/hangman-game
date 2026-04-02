import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainMenu } from "./components/main-menu/MainMenu";
import { HowToPlay } from "./components/how-to-play/HowToPlay";
import { PickACategory } from "./components/pick-a-category/PickACategory";

import { AppContainer } from "./App.styles";
import { Game } from "./components/game/Game";

export const App = () => {
  return (
    <AppContainer>
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route path="/how-to-play" element={<HowToPlay />} />
        <Route path="/pick-a-category" element={<PickACategory />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </AppContainer>
  );
};
