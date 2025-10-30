import { beforeEach, describe, expect, it } from 'vitest';
import { useTodoStore } from '../store';

describe('todo store', () => {
  beforeEach(() => {
    useTodoStore.setState({ todos: [], filter: 'all' });
    window.localStorage.clear();
  });

  it('adds todos and toggles completion state', () => {
    const { addTodo, toggleTodo } = useTodoStore.getState();
    addTodo('Review PRs');

    expect(useTodoStore.getState().todos).toHaveLength(1);
    const todoId = useTodoStore.getState().todos[0]?.id ?? '';
    expect(useTodoStore.getState().todos[0]?.completed).toBe(false);

    toggleTodo(todoId);
    expect(useTodoStore.getState().todos[0]?.completed).toBe(true);
  });

  it('filters todos correctly', () => {
    const { addTodo, setFilter } = useTodoStore.getState();
    addTodo('One');
    addTodo('Two');

    const [firstTodo] = useTodoStore.getState().todos;
    if (firstTodo) {
      useTodoStore.getState().toggleTodo(firstTodo.id);
    }

    setFilter('completed');
    expect(useTodoStore.getState().filter).toBe('completed');
  });
});
