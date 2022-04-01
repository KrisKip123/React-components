import { getByRole, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from './NotFound';

describe('NotFound', () => {
  test('TEXT(404 NotFound)', () => {
    const { getByText } = render(<NotFound />);
    const linkElement = getByText(/404 Not Found/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('div', () => {
    const { container } = render(<NotFound />);
    expect(container).toBeInTheDocument();
  });
});
