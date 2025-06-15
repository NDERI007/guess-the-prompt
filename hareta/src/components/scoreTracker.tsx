import { useGameState } from '../state/gamestate';

export default function ScoreTracker() {
  const score = useGameState((state) => state.score);

  return (
    <div className="mt-4 text-center text-sm text-gray-600">
      Current Score: <span className="font-bold">{score}</span>
    </div>
  );
}
