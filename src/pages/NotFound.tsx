import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="space-y-4 text-center">
      <h1 className="text-4xl font-extrabold text-slate-900">404</h1>
      <p className="text-slate-600">
        The page you were looking for could not be found.
      </p>
      <Link
        to="/"
        className="inline-flex rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Go home
      </Link>
    </section>
  );
}
