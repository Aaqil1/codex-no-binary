import { useQuery } from '@tanstack/react-query';
import { TodoList } from '@/features/todos/components/TodoList';
import { fetchMotivation } from '@/features/todos/api';

export default function Home() {
  const { data, isLoading, isError, error, refetch, isFetching } = useQuery({
    queryKey: ['motivation'],
    queryFn: fetchMotivation,
    staleTime: 1000 * 60 * 5,
  });

  const errorMessage =
    error instanceof Error ? error.message : 'Something went wrong.';

  return (
    <div className="space-y-8">
      <section
        aria-live="polite"
        className="rounded-lg border border-slate-200 bg-white p-6 shadow"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-900">
              Welcome back 👋
            </h1>
            {isLoading ? (
              <p className="text-slate-600">Loading the latest update…</p>
            ) : isError ? (
              <p role="alert" className="text-red-600">
                {errorMessage}
              </p>
            ) : data ? (
              <p className="text-slate-700">{data.message}</p>
            ) : null}
            {data && (
              <p className="text-xs text-slate-400">
                Refreshed {new Date(data.timestamp).toLocaleTimeString()}
              </p>
            )}
          </div>
          <button
            type="button"
            onClick={() => void refetch()}
            className="self-start rounded-md border border-primary px-3 py-2 text-sm font-medium text-primary transition hover:bg-primary/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            aria-label="Refresh message"
            aria-busy={isFetching}
          >
            {isFetching ? 'Refreshing…' : 'Refresh'}
          </button>
        </div>
      </section>

      <TodoList />
    </div>
  );
}
