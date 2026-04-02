import { styled } from "styled-components";
import iconMenu from "../../assets/images/icon-menu.svg";

export const GameContainer = styled.div`
  display: grid;
  place-items: center;
`;

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 40px;
  color: #ffffff;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 88px;
  }
`;

export const MenuIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow: 0px -5px 0px -1px #9d2df540 inset;
  position: relative;

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: url("${iconMenu}") no-repeat center;
    background-size: 16px;
  }

  @media screen and (min-width: 768px) {
    &::after {
      background-size: 25px;
    }
  }

  @media screen and (min-width: 768px) {
    width: 94px;
    height: 94px;
    &::after {
      background-size: 35pxpx;
    }
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  max-width: 1195px;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

export const LetterBox = styled.div`
  width: 33px;
  height: 66px;
  background-color: ${({ $isEmpty }) => ($isEmpty ? "transparent" : "#2463ff")};
  border-radius: 12px;
  font-size: 40px;
  color: #ffffff;
  display: grid;
  place-items: center;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    width: 88px;
    height: 112px;
    border-radius: 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 112px;
    height: 128px;
    border-radius: 40px;
  }
`;
