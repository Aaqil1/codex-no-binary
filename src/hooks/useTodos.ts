import { useMemo } from 'react';
import {
  useTodoStore,
  selectTodos,
  selectFilter,
} from '@/features/todos/store';
import type { Todo } from '@/types/todo';

export function useTodos() {
  const todos = useTodoStore(selectTodos);
  const filter = useTodoStore(selectFilter);
  const addTodo = useTodoStore((state) => state.addTodo);
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const setFilter = useTodoStore((state) => state.setFilter);
  const clearCompleted = useTodoStore((state) => state.clearCompleted);

  const filteredTodos = useMemo(() => {
    switch (filter) {
      case 'active':
        return todos.filter((todo) => !todo.completed);
      case 'completed':
        return todos.filter((todo) => todo.completed);
      default:
        return todos;
    }
  }, [todos, filter]);

  const stats = useMemo(() => {
    const total = todos.length;
    const completed = todos.filter((todo) => todo.completed).length;
    const active = total - completed;
    return { total, active, completed };
  }, [todos]);

  return {
    todos,
    filteredTodos,
    filter,
    addTodo,
    toggleTodo,
    setFilter,
    clearCompleted,
    stats,
  } as const;
}

export type TodosHookReturn = ReturnType<typeof useTodos>;
export const isTodoComplete = (todo: Todo) => todo.completed;
