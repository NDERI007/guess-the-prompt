type Guess = {
  guess: string;
  correct: boolean;
};

type GameState = {
  prompt: string;
  guessHistory: Guess[];
  feedback: string;
  score: number;
  hintUsed: boolean;
  timer: number;
  submitGuess: (guess: string) => void;
  regeneratePrompt: () => void;
  useHint: () => void;
  tickTimer: () => void;
  resetTimer: () => void;
};

import { create } from 'zustand';

export const useGameState = create<GameState>((set) => ({
  // Core game data
  prompt: 'A robot riding a horse in the desert',
  guessHistory: [],
  feedback: '',
  score: 0,
  hintUsed: false,
  timer: 30,

  // Core logic functions
  submitGuess: (guess) =>
    set((state) => {
      const correct = guess.toLowerCase().includes('robot');
      const newScore = correct ? state.score + 1 : state.score;

      return {
        guessHistory: [...state.guessHistory, { guess, correct }],
        feedback: correct ? '🎉 Correct!' : '❌ Try again',
        score: newScore,
      };
    }),

  regeneratePrompt: () =>
    set(() => ({
      prompt: 'A castle floating in the clouds', // for now, static
      feedback: '',
      guessHistory: [],
      hintUsed: false,
      timer: 30,
    })),

  useHint: () =>
    set((state) => ({
      hintUsed: true,
      feedback: `Hint: It involves "${state.prompt.split(' ')[1]}"`,
    })),

  tickTimer: () =>
    set((state) => ({
      timer: state.timer > 0 ? state.timer - 1 : 0,
    })),

  resetTimer: () => set(() => ({ timer: 30 })),
}));
