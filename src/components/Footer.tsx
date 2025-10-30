import { version as reactVersion } from 'react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-100">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-4 py-6 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p aria-live="polite">
          Built with React {reactVersion} · v{__APP_VERSION__}
        </p>
        <p>
          <span className="font-semibold">Tip:</span> Your data lives only in
          this browser.
        </p>
      </div>
    </footer>
  );
}
