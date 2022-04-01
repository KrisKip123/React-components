import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  test('App router ', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const input = screen.getByTestId('name');
    const mainLink = screen.getByTestId('main-link');
    const aboutLink = screen.getByTestId('about-link');
    userEvent.click(aboutLink);
    expect(input).not.toBeInTheDocument();
    expect(screen.queryByText(/404 Not Found/i)).not.toBeInTheDocument();
    userEvent.click(mainLink);
    expect(screen.getByTestId('name')).toBeInTheDocument();
    expect(screen.queryByText(/404 Not Found/i)).not.toBeInTheDocument();
  });

  test('App not-Found', () => {
    render(
      <MemoryRouter initialEntries={['/ksdkaskd', '/dasdwqeqwe', '/qwqwewqeqweewqewqe']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByText(/404 Not Found/i)).toBeInTheDocument();
  });
});
