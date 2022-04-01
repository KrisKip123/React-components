import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Card from './Card';
import { pizzas } from '../CatalogCard';

describe('Card', () => {
  test('Card ', () => {
    render(<Card props={pizzas[0]} />);
    const images = screen.getAllByAltText('no img');
    images.map((item) => {
      expect(item).toBeInTheDocument();
      expect(item).not.toBeNull();
      expect(item).not.toBeNaN();
    });
    expect(screen.getByText(pizzas[0].name)).toBeInTheDocument();
    expect(screen.getByText(pizzas[0].ingredients)).toBeInTheDocument();
    expect(screen.getByText(pizzas[0].weight)).toBeInTheDocument();
  });
});
