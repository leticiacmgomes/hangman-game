import { useGameStore } from "../../store/gameStore";
import { BackButton } from "../ui/BackButton";
import {
  PickACategoryContainer,
  Header,
  CategoriesContainer,
  CategoryItem,
} from "./PickACategory.styles";

export const PickACategory = () => {
  const { data, setCurrentCategory, setRandomWord } = useGameStore();
  const categories = Object.keys(data);

  const handleCategoryChoice = (category) => {
    setCurrentCategory(category)
    setRandomWord();
  }

  return (
    <PickACategoryContainer>
      <Header>
        <BackButton path="/" />
        Pick a Category
      </Header>
      <CategoriesContainer>
        {categories.map((category) => (
          <CategoryItem
            key={category}
            to="/game"
            onClick={() => handleCategoryChoice(category)}
          >
            {category}
          </CategoryItem>
        ))}
      </CategoriesContainer>
    </PickACategoryContainer>
  );
};
