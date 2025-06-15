import { useGameState } from '../state/gamestate';

export default function GuessHistory() {
  const guessHistory = useGameState((state) => state.guessHistory);

  return (
    <div className="mt-6">
      <h2 className="mb-2 text-lg font-bold">Guess History</h2>
      <ul className="space-y-1">
        {guessHistory.map(({ guess, correct }, idx) => (
          <li
            key={idx}
            className={`rounded-md p-2 ${
              correct ? 'bg-green-100' : 'bg-red-100'
            }`}
          >
            {guess}
          </li>
        ))}
      </ul>
    </div>
  );
}
