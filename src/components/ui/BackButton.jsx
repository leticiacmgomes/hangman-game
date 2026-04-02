import { Link } from "react-router-dom";
import { styled } from "styled-components";

import iconBack from "../../assets/images/icon-back.svg";

const BackButtonContainer = styled(Link)`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: linear-gradient(180deg, #fe71fe 16.42%, #7199ff 100%);
  box-shadow: 0px -6px 0px 7px #9d2df540 inset;
  position: relative;
  display: grid;

  @media screen and (min-width: 768px) {
    width: 64px;
    height: 64px;
  }

  @media screen and (min-width: 1440px) {
    width: 64px;
    height: 64px;
    justify-self: left;
  }

  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    place-self: center;
    background: url("${iconBack}") no-repeat center;
    background-size: 17px;
  }
`;

export const BackButton = ({ path }) => {
  return <BackButtonContainer to={path} />;
};
