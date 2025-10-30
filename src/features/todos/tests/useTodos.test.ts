import { beforeEach, describe, expect, it } from 'vitest';
import { renderHook, act } from '@testing-library/react';
import { useTodos } from '@/hooks/useTodos';
import { useTodoStore } from '../store';

describe('useTodos hook', () => {
  beforeEach(() => {
    useTodoStore.setState({ todos: [], filter: 'all' });
    window.localStorage.clear();
  });

  it('computes derived statistics based on todo completion', () => {
    const { result } = renderHook(() => useTodos());

    act(() => {
      result.current.addTodo('Learn Zustand');
      result.current.addTodo('Ship feature');
    });

    expect(result.current.stats.total).toBe(2);
    expect(result.current.stats.completed).toBe(0);

    act(() => {
      const todoId = result.current.todos[0]?.id;
      if (todoId) {
        result.current.toggleTodo(todoId);
      }
    });

    expect(result.current.stats.completed).toBe(1);
    expect(result.current.stats.active).toBe(1);
  });
});
