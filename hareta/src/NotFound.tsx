import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="mt-20 text-center">
      <h2 className="mb-4 text-2xl font-bold">404 - Page Not Found</h2>
      <Link to="/" className="text-blue-600 underline">
        Go back home
      </Link>
    </div>
  );
}
