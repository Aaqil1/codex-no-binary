# Codex Todos

A production-ready React 18 demo built with Vite + TypeScript that showcases modern frontend tooling, local-first state with persistence, data fetching with TanStack Query, and full API mocking via MSW.

## Features

- ⚡️ **Vite** for lightning-fast development and builds.
- 🔒 **TypeScript** across the stack.
- 🎯 **React Router v6** with lazy-loaded routes, shared layout, and error boundaries.
- ✅ **Zustand** store powering a persistent todo list with filtering and optimistic UI.
- 🔄 **TanStack Query** + **MSW** for declarative data fetching against a mocked API.
- 🎨 **Tailwind CSS** for utility-first styling and a responsive layout.
- 🧪 **Vitest** + **React Testing Library** with MSW-powered tests.
- 🧹 **ESLint** + **Prettier** for consistent formatting and linting.

## Getting started

```bash
npm install
```

Copy the example environment file and tweak values as needed:

```bash
cp .env.example .env.local
```

## Available scripts

| Command                | Description                                         |
| ---------------------- | --------------------------------------------------- |
| `npm run dev`          | Start the Vite dev server with MSW mocking enabled. |
| `npm run build`        | Type-check then create a production build.          |
| `npm run preview`      | Preview the built app locally.                      |
| `npm run lint`         | Run ESLint (TypeScript-aware flat config).          |
| `npm run format`       | Check formatting with Prettier.                     |
| `npm run format:write` | Format files in-place with Prettier.                |
| `npm run test`         | Execute the Vitest suite once.                      |
| `npm run test:watch`   | Run tests in watch mode.                            |
| `npm run type-check`   | Run the TypeScript compiler without emitting files. |

## Project structure

```
src/
  App.tsx
  main.tsx
  router.tsx
  components/
  features/
  hooks/
  lib/
  mocks/
  pages/
  styles/
  types/
```

## Tooling decisions

- **Vite** keeps feedback loops quick while aligning with the ES module ecosystem.
- **TypeScript** enables type-safe components, hooks, and stores.
- **React Router v6** provides nested layouts and error boundaries with minimal configuration.
- **Zustand** offers a tiny, ergonomic store with `persist` middleware for localStorage sync.
- **TanStack Query** pairs perfectly with **MSW** to demonstrate async data flows without a real backend.
- **Tailwind CSS** delivers responsive, accessible styling using a utility-first approach.
- **Vitest** + **React Testing Library** give fast, component-focused tests that mirror user behavior.
- **ESLint** + **Prettier** enforce a consistent codebase using the latest flat-config setup.

## Environment variables

The app reads configuration from `import.meta.env` at build time. Copy `.env.example` and adjust as needed.

| Variable            | Purpose                                                        |
| ------------------- | -------------------------------------------------------------- |
| `VITE_API_BASE_URL` | Optional base URL that MSW also respects for mocked endpoints. |

## Testing

Vitest is configured with the JSDOM environment, React Testing Library helpers, and MSW.

```bash
npm run test
```

## Building for production

```bash
npm run build
npm run preview
```

This runs a strict type-check followed by the Vite production build, then serves the output from `dist/`.

## Accessibility & UX

- Semantic HTML, accessible labels, and `aria-*` attributes for todos.
- Suspense-powered loading states and explicit error boundaries.
- Optimistic updates and persistent storage to keep interactions snappy.

---

Made with ❤️ as a reference implementation for modern React tooling without a backend.
