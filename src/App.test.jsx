import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the demo heading', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /hello from the demo app/i })).toBeInTheDocument();
  });
});
