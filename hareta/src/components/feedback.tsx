import { useGameState } from '../state/gamestate';

export default function FeedbackDisplay() {
  const feedback = useGameState((state) => state.feedback);

  return (
    <div className="mt-4 text-center text-xl font-semibold">{feedback}</div>
  );
}
