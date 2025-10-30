import { NavLink } from 'react-router-dom';
import { Button } from './Button';

const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
  `rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
    isActive
      ? 'bg-primary-dark text-white'
      : 'text-slate-100 hover:bg-primary-dark/70'
  }`;

export function Header() {
  return (
    <header className="bg-primary text-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:flex-nowrap">
        <NavLink
          to="/"
          className="text-lg font-semibold tracking-tight"
          aria-label="Navigate to home page"
        >
          Codex Todos
        </NavLink>
        <nav aria-label="Main navigation" className="flex items-center gap-2">
          <NavLink to="/" className={navLinkClasses} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
        </nav>
        <Button
          variant="secondary"
          className="hidden sm:inline-flex"
          aria-label="View the source code"
          onClick={() =>
            window.open('https://github.com/', '_blank', 'noopener')
          }
        >
          View Source
        </Button>
      </div>
    </header>
  );
}
