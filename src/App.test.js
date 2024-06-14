// Import the 'act' function from the 'react' package
import { act } from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  // Use the 'act' function instead of 'ReactDOMTestUtils.act'
  act(() => {
    render(<App />);
  });

  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
