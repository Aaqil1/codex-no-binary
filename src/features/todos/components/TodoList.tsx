import { type FormEvent, useState } from 'react';
import { Button } from '@/components/Button';
import { useTodos } from '@/hooks/useTodos';
import type { TodoFilter } from '@/types/todo';

const FILTER_OPTIONS: { label: string; value: TodoFilter }[] = [
  { label: 'All', value: 'all' },
  { label: 'Active', value: 'active' },
  { label: 'Completed', value: 'completed' },
];

export function TodoList() {
  const {
    filteredTodos,
    filter,
    addTodo,
    toggleTodo,
    setFilter,
    clearCompleted,
    stats,
  } = useTodos();
  const [title, setTitle] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!title.trim()) return;

    setIsSubmitting(true);
    addTodo(title);
    setTitle('');
    window.setTimeout(() => setIsSubmitting(false), 300);
  };

  return (
    <section aria-labelledby="todos-heading" className="space-y-6">
      <header>
        <h2 id="todos-heading" className="text-xl font-semibold text-slate-900">
          Todos
        </h2>
        <p className="text-sm text-slate-600">
          {stats.active} tasks remaining · {stats.completed} completed
        </p>
      </header>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <label htmlFor="todo-title" className="sr-only">
          Add a new todo
        </label>
        <input
          id="todo-title"
          name="title"
          type="text"
          autoComplete="off"
          aria-label="New todo title"
          placeholder="What needs to be done?"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          className="flex-1 rounded-md border border-slate-300 bg-white px-3 py-2 text-base shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <Button
          type="submit"
          disabled={isSubmitting || !title.trim()}
          aria-busy={isSubmitting}
        >
          {isSubmitting ? 'Adding…' : 'Add'}
        </Button>
      </form>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div
          className="flex items-center gap-2"
          role="group"
          aria-label="Filter todos"
        >
          {FILTER_OPTIONS.map(({ label, value }) => (
            <Button
              key={value}
              type="button"
              variant={filter === value ? 'primary' : 'ghost'}
              aria-pressed={filter === value}
              onClick={() => setFilter(value)}
            >
              {label}
            </Button>
          ))}
        </div>
        <Button
          type="button"
          variant="secondary"
          onClick={clearCompleted}
          disabled={stats.completed === 0}
        >
          Clear completed
        </Button>
      </div>

      <ul className="space-y-2" role="list">
        {filteredTodos.length === 0 ? (
          <li
            className="rounded-md border border-dashed border-slate-300 bg-white px-4 py-6 text-center text-slate-500"
            role="status"
          >
            No todos found. Add one above to get started.
          </li>
        ) : (
          filteredTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-start justify-between gap-4 rounded-md bg-white px-4 py-3 shadow"
            >
              <label className="flex flex-1 cursor-pointer items-center gap-3 text-left">
                <input
                  type="checkbox"
                  className="h-5 w-5 rounded border-slate-300 text-primary focus:ring-primary"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                  aria-label={`Mark ${todo.title} as ${todo.completed ? 'incomplete' : 'complete'}`}
                />
                <span
                  className={`text-base ${todo.completed ? 'text-slate-400 line-through' : 'text-slate-800'}`}
                >
                  {todo.title}
                </span>
              </label>
              <time
                dateTime={todo.createdAt}
                className="hidden text-xs text-slate-400 sm:block"
              >
                {new Date(todo.createdAt).toLocaleString()}
              </time>
            </li>
          ))
        )}
      </ul>
    </section>
  );
}
