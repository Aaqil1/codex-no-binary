export default function About() {
  return (
    <section className="space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-bold text-slate-900">
          About this project
        </h1>
        <p className="text-slate-600">
          This demo showcases a modern React 18 setup with state management,
          data fetching, testing, and a fully mocked API layer.
        </p>
      </header>
      <article className="rounded-lg border border-slate-200 bg-white p-6 shadow">
        <h2 className="text-xl font-semibold text-slate-900">Highlights</h2>
        <ul className="mt-4 list-disc space-y-2 pl-6 text-slate-700">
          <li>Local-first todos powered by Zustand with persistent storage.</li>
          <li>Reliable UI states thanks to TanStack Query and MSW.</li>
          <li>
            Developer experience with Vite, TypeScript, ESLint, Prettier, and
            Vitest.
          </li>
        </ul>
      </article>
    </section>
  );
}
