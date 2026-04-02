import { styled } from "styled-components";

import iconHeart from "../../../assets/images/icon-heart.svg";

export const LifeContainer = styled.div`
  width: 100px;
  height: 24px;
  background: url("${iconHeart}") no-repeat center right;
  background-size: contain;
  align-self: center;
  display: grid;
  align-items: center;

    @media screen and (min-width: 768px) {
    width: 253px;
    height: 48px;
  }
    @media screen and (min-width: 1440px) {
    width: 333px;
  }
`;

export const LifeBar = styled.div`
  width: 57px;
  height: 16px;
  padding: 0 0.3rem;
  background-color: #ffffff;
  display: grid;
  border-radius: 96px;

  &::after {
    content: "";
    display: block;
    width: ${({ $lifePercent }) => `${$lifePercent}%`};
    height: 50%;
    border-radius: 96px;
    align-self: center;
    justify-self: start;
    background-color: #261676;
  }

  @media screen and (min-width: 768px) {
    width: 160px;
    height: 31px;
    padding: 0 0.5rem;
  }

    @media screen and (min-width: 1440px) {
    width: 240px;
  }
`;
