import { useGameStore } from "../../../store/gameStore";
import { AlphabetContainer, LetterBox } from "./Alphabet.styles";


export const Alphabet = () => {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const {handleNewAttempt, attempts } = useGameStore()
  
  return (
    <AlphabetContainer>
      {alphabet.map((letter) => (
        <LetterBox key={letter} $isActive={!attempts.includes(letter)} onClick={() => handleNewAttempt(letter)} >{letter}</LetterBox>
      ))}
    </AlphabetContainer>
  );
};
