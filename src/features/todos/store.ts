import { create } from 'zustand';
import { devtools, persist, createJSONStorage } from 'zustand/middleware';
import { nanoid } from 'nanoid/non-secure';
import type { Todo, TodoFilter } from '@/types/todo';

interface TodoState {
  todos: Todo[];
  filter: TodoFilter;
  addTodo: (title: string) => void;
  toggleTodo: (id: string) => void;
  setFilter: (filter: TodoFilter) => void;
  clearCompleted: () => void;
}

const createNoopStorage = (): Storage => ({
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined,
  key: () => null,
  clear: () => undefined,
  get length() {
    return 0;
  },
});

export const useTodoStore = create<TodoState>()(
  devtools(
    persist(
      (set, get) => ({
        todos: [],
        filter: 'all',
        addTodo: (title) => {
          const trimmed = title.trim();
          if (!trimmed) return;

          const newTodo: Todo = {
            id: nanoid(),
            title: trimmed,
            completed: false,
            createdAt: new Date().toISOString(),
          };

          set((state) => ({ todos: [newTodo, ...state.todos] }));
        },
        toggleTodo: (id) => {
          set((state) => ({
            todos: state.todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            ),
          }));
        },
        setFilter: (filter) => set({ filter }),
        clearCompleted: () => {
          const { todos } = get();
          set({ todos: todos.filter((todo) => !todo.completed) });
        },
      }),
      {
        name: 'codex-todos',
        storage: createJSONStorage(() =>
          typeof window !== 'undefined'
            ? window.localStorage
            : createNoopStorage()
        ),
        partialize: (state) => ({ todos: state.todos, filter: state.filter }),
      }
    )
  )
);

export const selectTodos = (state: TodoState) => state.todos;
export const selectFilter = (state: TodoState) => state.filter;
