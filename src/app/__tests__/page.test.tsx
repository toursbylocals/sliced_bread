import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import OrderForm from '../../components/orderform/orderform';

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([
      {
        _id: '1',
        name: { en: 'Blue Water 0.5L', fr: 'Eau Bleue 0,5L' },
        price: 10.99,
      }
    ]),
  })
);

jest.mock('next/navigation', () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe('OrderForm', () => {
  it('fetches and displays products', async () => {
    render(<OrderForm />);
    expect(screen.getByRole('option')).toBeInTheDocument();
  });

  it('shows error if fetch fails', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: false,
        json: () => Promise.resolve({ message: 'Failed to fetch products' }),
      })
    );

    render(<OrderForm />);
    await waitFor(() => screen.getByText('Failed to load products. Please try again later.'));

    expect(screen.getByText('Failed to load products. Please try again later.')).toBeInTheDocument();
  });
});
