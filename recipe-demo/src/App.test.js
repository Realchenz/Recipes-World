import { render, screen } from '@testing-library/react';
import App from './App';

test('render h1 element', () => {
  render(<App />);
  const headerElement = screen.getByText(/My Recipe Book/i);
  expect(headerElement).toBeInTheDocument();
});
