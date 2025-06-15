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
  resetGame: () => void;
};

import { create } from 'zustand';
import { getFeedback } from '../api/REQ';

export const useGameState = create<GameState>((set, get) => ({
  // Core game data
  prompt: 'A robot riding a horse in the desert',
  guessHistory: [],
  feedback: '',
  score: 0,
  hintUsed: false,
  timer: 30,

  // Core logic functions
  submitGuess: async (guess: string) => {
    const { prompt, guessHistory, score } = get(); // ✅ Now works

    try {
      const feedback = await getFeedback(guess, prompt);

      const correct = feedback === '🔥 Hot!';
      const newScore = correct ? score + 1 : score;

      set({
        guessHistory: [...guessHistory, { guess, correct }],
        feedback,
        score: newScore,
      });
      if (correct) get().resetGame();
    } catch (error) {
      console.error('Feedback error:', error);
      set({
        feedback: '❌ Could not process guess',
        guessHistory: [...guessHistory, { guess, correct: false }],
      });
    }
  },

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

  resetGame: () =>
    set(() => ({
      prompt: 'A new mysterious scene', // can randomize later
      feedback: '',
      guessHistory: [],
      hintUsed: false,
      timer: 30,
    })),
}));
