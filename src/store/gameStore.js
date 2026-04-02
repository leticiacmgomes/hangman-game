import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import data from "../data/data.json";

export const useGameStore = create(
  persist(
    (set, get) => ({
      data: data.categories,
      currentCategory: "",
      randomWord: "",
      attempts: [],
      correctAttempts: [],
      incorrectAttempts: 0,
      isVictory: false,
      isDefeat: false,
      isPaused: false,
      setIsPaused: (value) => set({ isPaused: value }),
      setCurrentCategory: (category) => set({ currentCategory: category }),
      handleWin: () => {
        const { randomWord, correctAttempts } = get();
        const randomWordLetters = [...new Set(randomWord.name)].sort();
        const isVictory =
          JSON.stringify(randomWordLetters) ===
          JSON.stringify(correctAttempts.sort());

        if (isVictory) {
          alert(isVictory);
          set({ isVictory: true });
        }
      },
      handleNewAttempt: (letter) => {
        const { attempts, incorrectAttempts, randomWord, handleWin } = get();
        if (!attempts.includes(letter)) {
          set((state) => ({
            attempts: [...state.attempts, letter],
          }));
          if (randomWord.name.includes(letter)) {
            set((state) => ({
              correctAttempts: [...state.correctAttempts, letter],
            }));
          } else {
            set((state) => ({
              incorrectAttempts: state.incorrectAttempts + 1,
            }));
            if (get().incorrectAttempts >= 6) set({ isDefeat: true });
          }
          handleWin();
        }
      },
      setRandomWord: () => {
        const { data, currentCategory } = get();
        const words = data[currentCategory];
        

        const randomWord =
          words[Math.floor(Math.random() * words.length)];
        randomWord.name = randomWord.name.toLowerCase();

        set((state) => ({
          randomWord,
          data: {
            ...state.data,
            [currentCategory]: state.data[currentCategory].map((item) =>
              item === randomWord ? { ...item, selected: true } : item,
            ),
          },
          attempts: [],
          correctAttempts: [],
          incorrectAttempts: 0,
          isPaused: false,
          isVictory: false,
          isDefeat: false,
        }));
      },
    }),
    {
      name: "game-storage",
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
