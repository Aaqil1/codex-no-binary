import { Suspense } from 'react';
import {
  Link,
  Outlet,
  ScrollRestoration,
  isRouteErrorResponse,
  useRouteError,
} from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-100">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-5xl px-4 py-10">
          <Suspense
            fallback={<p className="text-center text-slate-500">Loading…</p>}
          >
            <Outlet />
          </Suspense>
        </div>
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export function RouteErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    return (
      <section className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-4 px-4 text-center">
        <h1 className="text-4xl font-bold text-slate-900">{error.status}</h1>
        <p className="text-slate-600">
          {error.statusText || 'Something went wrong.'}
        </p>
        <Link
          to="/"
          className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          Back home
        </Link>
      </section>
    );
  }

  return (
    <section className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center gap-4 px-4 text-center">
      <h1 className="text-3xl font-bold text-slate-900">Unexpected error</h1>
      <p className="text-slate-600">
        {error instanceof Error ? error.message : 'An unknown error occurred.'}
      </p>
      <Link
        to="/"
        className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
      >
        Back home
      </Link>
    </section>
  );
}
