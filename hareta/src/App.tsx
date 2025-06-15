import FeedbackDisplay from './components/feedback';
import GuessHistory from './components/GuessHistory';
import GuessInput from './components/guessInput';
import ResetButton from './components/ResetButton';
import ScoreTracker from './components/scoreTracker';
import './index.css';

function App() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center gap-6 bg-gradient-to-br from-yellow-50 to-orange-100 p-6 text-gray-800">
        <h1 className="mb-4 text-3xl font-bold">🎮 Guess the Prompt</h1>
        <GuessInput />
        <FeedbackDisplay />
        <ScoreTracker />
        <GuessHistory />
        <ResetButton />

        <footer className="mt-4 text-sm text-gray-400">
          Built with ❤️ by You
        </footer>
      </div>
    </>
  );
}

export default App;
