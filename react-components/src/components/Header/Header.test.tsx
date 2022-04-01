import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import Header from './Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header', () => {
  test('Header ', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );
    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');
    expect(mainLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
});
