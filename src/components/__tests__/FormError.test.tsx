import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { FormError } from '../FormError';

describe('FormError Component', () => {
  it('renders error message correctly', () => {
    render(<FormError>City is required.</FormError>);

    const errorMessage = screen.getByText('City is required.');
    expect(errorMessage).toBeInTheDocument();
    expect(errorMessage).toHaveClass('text-red-600', 'text-sm');
  });
});
