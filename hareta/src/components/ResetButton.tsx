import { useGameState } from '../state/gamestate';

export default function ResetButton() {
  const resetGame = useGameState((state) => state.resetGame);

  return (
    <button
      onClick={resetGame}
      className="mt-4 rounded-lg bg-gray-300 px-4 py-2 text-sm hover:bg-gray-400"
    >
      Reset Game
    </button>
  );
}
