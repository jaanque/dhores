import { render, screen } from '@testing-library/react';
import App from './App';

test('renders hero section with correct heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Alquila espacios únicos por horas/i);
  expect(headingElement).toBeInTheDocument();
});
