require("@testing-library/jest-dom");
import { render, screen, fireEvent } from '@testing-library/react';
import MyComponent from './MyComponent';
import '@testing-library/jest-dom'; // Import the custom matchers

test('renders hello world text', () => {
  render(<MyComponent />);
  
  const helloText = screen.getByText(/hello world/i);
  expect(helloText).toBeInTheDocument(); // Custom matcher to check if text is in the document
});

test('toggles visibility of element', () => {
  render(<MyComponent />);
  
  const toggleButton = screen.getByRole('button', { name: /toggle visibility/i });
  const hiddenElement = screen.queryByTestId('hidden-element');
  
  // Check if the element is initially not visible
  expect(hiddenElement).not.toBeInTheDocument();
  
  // Click the button to toggle visibility
  fireEvent.click(toggleButton);
  
  // Check if the element becomes visible after clicking the button
  expect(screen.getByTestId('hidden-element')).toBeInTheDocument();
});
