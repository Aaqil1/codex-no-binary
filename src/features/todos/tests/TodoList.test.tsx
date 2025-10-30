import { beforeEach, describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TodoList } from '../components/TodoList';
import { useTodoStore } from '../store';

describe('TodoList component', () => {
  beforeEach(() => {
    useTodoStore.setState({ todos: [], filter: 'all' });
    window.localStorage.clear();
  });

  it('allows users to add and toggle todos', async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const input = screen.getByLabelText(/new todo title/i);
    await user.type(input, 'Write tests');
    await user.click(screen.getByRole('button', { name: /add/i }));

    const todoItem = await screen.findByText('Write tests');
    expect(todoItem).toBeInTheDocument();

    const checkbox = screen.getByRole('checkbox', {
      name: /mark write tests as complete/i,
    });
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
  });
});
