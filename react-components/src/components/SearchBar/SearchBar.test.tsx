import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchBar from './SearchBar';
import userEvent from '@testing-library/user-event';

describe('SearchBar', () => {
  test('SearchBar input', () => {
    render(<SearchBar />);
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
    const input = screen.getByTestId('name');
    userEvent.type(input, 'Kirill');
    expect(screen.getByDisplayValue('Kirill')).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
    fireEvent.input(input, {
      target: { value: '123' },
    });
    expect(input).toContainHTML('123');
  });
});
