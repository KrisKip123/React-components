import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Main from './Main';
import { pizzas } from '../CatalogCard/CatalogCard';

describe('Header', () => {
  test('Header-searchBar ', () => {
    render(<Main />);
    const input = screen.getByTestId('name');
    expect(input).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Search/i)).toBeInTheDocument();
    userEvent.type(input, 'Kirill');
    expect(screen.getByDisplayValue('Kirill')).toBeInTheDocument();
    fireEvent.input(input, {
      target: { value: '123' },
    });
    expect(input).toContainHTML('123');
  });
  test('CatalogCard', () => {
    render(<Main />);
    pizzas.map((pizza) => {
      const { name, ingredients, weight } = pizza;
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(ingredients)).toBeInTheDocument();
      expect(screen.getByText(weight)).toBeInTheDocument();
    });
  });
});
