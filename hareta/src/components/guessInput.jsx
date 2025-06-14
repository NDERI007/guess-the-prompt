import { useState } from 'react';
import { useGameState } from '../state/gameState';

export default function GuessInput() {
  const [input, setInput] = useState('');

  const submitGuess = useGameState((state) => state.submitGuess);
  const feedback = useGameState((state) => state.feedback);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    submitGuess(input);
    setInput('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mt-6 flex w-full max-w-md flex-col gap-3 rounded-2xl bg-gradient-to-br from-yellow-100 via-yellow-200 to-orange-100 p-6 shadow-lg"
    >
      <input
        type="text"
        placeholder="Enter your guess..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="rounded-lg border-2 border-orange-300 px-4 py-2 text-lg shadow-sm focus:ring-2 focus:ring-yellow-500 focus:outline-none"
      />
      <button
        type="submit"
        className="rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 py-2 text-lg font-semibold text-white shadow-md transition duration-200 hover:brightness-110"
      >
        🔍 Submit Guess
      </button>
      {feedback && (
        <p className="mt-2 text-center text-lg font-medium text-orange-700">
          {feedback}
        </p>
      )}
    </form>
  );
}
