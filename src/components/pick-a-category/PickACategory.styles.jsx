import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const PickACategoryContainer = styled.div``;

export const Header = styled.header`
  font-size: 48px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;

  @media screen and (min-width: 768px) {
    font-size: 104px;
    justify-content: center;
    gap: 5rem;
  }

  @media screen and (min-width: 768px) {
    font-size: 104px;
  }
`;

export const CategoriesContainer = styled.ul`
  display: grid;
  grid-template: repeat(6, auto) / auto;
  row-gap: 0.5rem;
  
  @media screen and (min-width: 768px) {
    grid-template: repeat(3, auto) / repeat(2, auto);
  }

  @media screen and (min-width: 1440px) {
    grid-template: repeat(2, auto) / repeat(3, auto);
  }
`;

export const CategoryItem = styled(Link)`
  all: unset;
  width: 100%;
  height: 77px;
  border-radius: 20px;
  border: none;
  display: grid;
  place-items: center;
  font-size: 24px;
  text-transform: uppercase;
  color: #ffffff;
  background-color: #2463ff;
  box-shadow:
    0px -2px 0px 3px #140e66 inset,
    0px 1px 0px 6px #3c74ff inset;

  @media screen and (min-width: 768px) {
    width: 324px;
    height: 182px;
    font-size: 48px;
    margin: auto;
  }

  @media screen and (min-width: 1440px) {
    width: 384px;
    height: 190px;
    font-size: 48px;
    margin: auto;
  }
`;
