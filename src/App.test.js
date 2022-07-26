import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Jeff... The dark side of the force is a pathway to many abilities, some considered to be unnatural.../i);
  expect(linkElement).toBeInTheDocument();
});



