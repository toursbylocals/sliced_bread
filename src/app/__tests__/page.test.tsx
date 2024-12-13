import '@testing-library/jest-dom';

import { render, screen, waitFor } from '@testing-library/react';
import { useRouter, useSearchParams } from 'next/navigation';

import HomePage from '../page';

// Mock the necessary Next.js hooks
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
  usePathname: jest.fn(),
  useSearchParams: jest.fn(),
}));

describe('HomePage', () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    // Clear any mock function calls before each test
    mockPush.mockClear();
    (useRouter as jest.Mock).mockReturnValue({
      push: mockPush,
    });
  });

  it('renders the OrderForm when there is no token in the URL', () => {
    (useSearchParams as jest.Mock).mockReturnValue(new URLSearchParams());

    render(<HomePage />);

    // Check that the OrderForm is rendered
    expect(
      screen.getByText('Order Your Spicy Manhattans!'),
    ).toBeInTheDocument();
    expect(screen.queryByText('Order Summary')).not.toBeInTheDocument(); // OrderDetails should not render
  });

  it('renders the OrderDetails when there is a token in the URL and order details are fetched', async () => {
    const mockOrderDetails = {
      orderId: '123',
      customerName: 'John Doe',
      city: 'Toronto',
      provinceState: 'ON',
      country: 'Canada',
      numberOfDrinks: 2,
    };

    (useSearchParams as jest.Mock).mockReturnValue(
      new URLSearchParams('token=some-token'),
    );
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve({ data: mockOrderDetails }),
      }),
    ) as jest.Mock;

    render(<HomePage />);

    // Ensure the OrderDetails component is rendered
    await waitFor(() =>
      expect(screen.getByText('Order Summary')).toBeInTheDocument(),
    );
    expect(screen.getByText(mockOrderDetails.customerName)).toBeInTheDocument();
    expect(screen.getByText(mockOrderDetails.city)).toBeInTheDocument();
  });
});
