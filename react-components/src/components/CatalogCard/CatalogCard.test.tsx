import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import { pizzas } from './CatalogCard';
import CatalogCard from './CatalogCard';

describe('CatalogCard', () => {
  test('CatalogCard ', () => {
    render(<CatalogCard />);
    pizzas.map((pizza) => {
      const { name, ingredients, weight } = pizza;
      expect(screen.getByText(name)).toBeInTheDocument();
      expect(screen.getByText(ingredients)).toBeInTheDocument();
      expect(screen.getByText(weight)).toBeInTheDocument();
    });
  });
});
