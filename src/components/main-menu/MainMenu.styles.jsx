import { styled } from "styled-components";
import { Link } from "react-router-dom";

import logo from "../../assets/images/logo.svg";
import iconPlay from "../../assets/images/icon-play.svg";

export const MainMenuContainer = styled.div`
  height: 481px;
  width: 100%;
  max-width: 500px;
  max-width: 592px;
  background: linear-gradient(180deg, #344aba 0%, rgba(0, 20, 121, 0.8) 100%);
  box-shadow:
    0px 6px 0px 8px #2463ff inset,
    0px -8px 0px 4px #140e66 inset;
  border-radius: 48px;
  position: relative;
  z-index: 1;
  padding: 3rem;
  display: grid;
  justify-items: center;
  gap: 2rem;
  align-self: center;
  place-self: center;

  @media screen and (min-width: 768px) {
    height: 592px;
    border-radius: 72px;
  }

  &::after {
    content: "";
    position: absolute;
    background-color: red;
    width: 263px;
    height: 130px;
    background: url("${logo}") no-repeat center;
    background-size: contain;
    z-index: 2;
    top: -50px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const PlayButton = styled(Link)`
  align-self: end;
  width: 160px;
  height: 160px;
  border-radius: 50%;
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow:
    0px -4px 0px 5px #243041 inset,
    0px -12px 0px 11px #9d2df5 inset;
  position: relative;
  z-index: 1;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    scale: 1.1;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: url("${iconPlay}") no-repeat center;
    z-index: 2;
  }

  @media screen and (min-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

export const HowToPlayButton = styled(Link)`
  all: unset;
  width: 100%;
  max-width: 261px;
  font-family: "Mouse Memoirs", sans-serif;
  align-self: start;
  padding: 0.8rem;
  border-radius: 40px;
  border: none;
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
  color: #ffffff;
  background-color: #2463ff;
  box-shadow:
    0px -2px 0px 3px #140e66 inset,
    0px 1px 0px 6px #3c74ff inset;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    scale: 1.05;
  }
`;
