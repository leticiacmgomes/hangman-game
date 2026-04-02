import { styled, css } from "styled-components";
import { Link } from "react-router-dom";

export const WinModalBackground = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(26, 4, 58, 0.75) 0%,
    rgba(21, 18, 120, 0.75) 70.31%,
    rgba(43, 22, 119, 0.75) 100%
  );
  display: grid;
`;

export const WinModalContainer = styled.div`
  position: relative;
  width: 324px;
  height: 445px;
  border-radius: 48px;
  background: linear-gradient(180deg, #344aba 0%, rgba(0, 20, 121, 0.8) 100%);
  box-shadow:
    0px -8px 0px 4px #140e66 inset,
    0px 6px 0px 8px #2463ff inset;
  place-self: center;
  display: grid;
  place-items: center;

  @media screen and (min-width: 768px) {
    width: 592px;
    height: 445px;
  }
`;

export const Title = styled.h2`
  font-size: 94px;
  color: transparent;
  text-transform: uppercase;
  background: linear-gradient(180deg, #67b6ff -7.41%, #ffffff 108.39%);
  background-clip: text;
  position: absolute;
  top: -2.5rem;
  justify-self: center;

    @media screen and (min-width: 768px) {
    font-size: 136px;
    top: -4rem;
  }
`;

const buttonBaseStyle = css`
  font-size: 32px;
  text-transform: uppercase;
  color: #ffffff;
  border-radius: 40px;
  padding: 1rem 4.3rem;
  width: fit-content;
  height: fit-content;
  font-family: "Mouse Memoirs", sans-serif;
`;

export const ButtonContainer = styled.div`
  width: 276px;
  height: 250px;
  display: grid;
  justify-items: center;
`;

export const PlayAgainButton = styled.button`
  ${buttonBaseStyle};
  background-color: #2463ff;
  border: none;
  box-shadow:
    0px -2px 0px 3px #140e66 inset,
    0px 1px 0px 6px #3c74ff inset;
`;

export const NewCategoryButton = styled(Link)`
  all: unset;
  ${buttonBaseStyle};
  background-color: #2463ff;
  box-shadow:
    0px -2px 0px 3px #140e66 inset,
    0px 1px 0px 6px #3c74ff inset;
`;

export const QuitGameButton = styled(Link)`
  all: unset;
  ${buttonBaseStyle};
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow:
    0px -2px 0px 3px #140e66 inset,
    0px 1px 0px 6px #c642fb inset;
`;
