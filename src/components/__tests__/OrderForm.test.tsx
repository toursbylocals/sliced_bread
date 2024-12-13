import '@testing-library/jest-dom';

import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import { OrderForm } from '../OrderForm';

// Mock the updateToken function
jest.mock('uuid', () => ({
  v4: jest.fn().mockReturnValue('mock-uuid'),
}));

const mockUpdateToken = jest.fn();

const setup = () => {
  render(<OrderForm updateToken={mockUpdateToken} />);
};

describe('OrderForm Component', () => {
  it('renders the form and all required fields', () => {
    setup();

    // Check that the form title is rendered
    expect(
      screen.getByText('Order Your Spicy Manhattans!'),
    ).toBeInTheDocument();

    // Check for the inputs
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Number of Drinks')).toBeInTheDocument();
    expect(screen.getByLabelText('City*')).toBeInTheDocument();
    expect(screen.getByLabelText('Country*')).toBeInTheDocument();
    expect(screen.getByLabelText('Province / State*')).toBeInTheDocument();
  });

  it('displays error message when required fields are not filled out', async () => {
    setup();

    // Submit the form without filling anything
    fireEvent.submit(screen.getByRole('form'));

    // Check for error messages
    await waitFor(() => {
      expect(screen.getByText('City is required.')).toBeInTheDocument();
      expect(screen.getByText('Country is required.')).toBeInTheDocument();
      expect(
        screen.getByText('Province / State is required.'),
      ).toBeInTheDocument();
    });
  });

  it('should submit the form and call updateToken on successful submission', async () => {
    // Mock successful form submission response
    const mockResponse = {
      data: {
        token: 'mock-token',
      },
    };
    global.fetch = jest.fn().mockResolvedValue({
      json: jest.fn().mockResolvedValue(mockResponse),
    });

    setup();

    // Fill in the form with valid data
    fireEvent.input(screen.getByLabelText('Name'), {
      target: { value: 'John Doe' },
    });
    fireEvent.input(screen.getByLabelText('Number of Drinks'), {
      target: { value: '2' },
    });
    fireEvent.input(screen.getByLabelText('City*'), {
      target: { value: 'New York' },
    });
    fireEvent.change(screen.getByLabelText('Country*'), {
      target: { value: 'US' },
    });
    fireEvent.change(screen.getByLabelText('Province / State*'), {
      target: { value: 'NY' },
    });

    // Submit the form
    fireEvent.submit(screen.getByRole('form'));

    // Wait for the mock API call to complete and assert the response
    await waitFor(() => {
      expect(mockUpdateToken).toHaveBeenCalledWith('mock-token');
    });

    // Check if the fetch function was called with the correct data
    expect(global.fetch).toHaveBeenCalledWith(
      '/api/order',
      expect.objectContaining({
        method: 'POST',
        body: '{"customerName":"John Doe","numberOfDrinks":"2","city":"New York","country":"US","provinceState":"NY","orderId":"mock-uuid"}',
      }),
    );
  });

  it('displays an error when a pattern validation fails (for customerName)', async () => {
    setup();

    // Submit with invalid customer name (non-alphabetical)
    fireEvent.input(screen.getByLabelText('Name'), {
      target: { value: 'John123' },
    });

    fireEvent.submit(screen.getByRole('form'));

    await waitFor(() => {
      // Expect error to show due to pattern mismatch
      expect(screen.getByText('Name is invalid.')).toBeInTheDocument();
    });
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<OrderForm updateToken={mockUpdateToken} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
