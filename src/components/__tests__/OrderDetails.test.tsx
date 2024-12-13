import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import type { ApiOrderDetails } from '@/api/order/details/[order]';

import { OrderDetails } from '../OrderDetails';

// Mock data for order details
const mockOrderDetails: ApiOrderDetails = {
  orderId: '12345',
  customerName: 'John Doe',
  city: 'New York',
  provinceState: 'NY',
  country: 'USA',
  numberOfDrinks: 3,
};

describe('OrderDetails Component', () => {
  it('renders order details correctly when orderDetails is provided', () => {
    render(<OrderDetails orderDetails={mockOrderDetails} />);

    // Check that the title "Order Summary" is rendered
    expect(screen.getByText('Order Summary')).toBeInTheDocument();

    // Check that each field in the orderDetails is rendered correctly
    expect(screen.getByText('Order ID:')).toBeInTheDocument();
    expect(screen.getByText(mockOrderDetails.orderId)).toBeInTheDocument();

    expect(screen.getByText('Customer Name:')).toBeInTheDocument();
    expect(screen.getByText(mockOrderDetails.customerName)).toBeInTheDocument();

    expect(screen.getByText('City:')).toBeInTheDocument();
    expect(screen.getByText(mockOrderDetails.city)).toBeInTheDocument();

    expect(screen.getByText('Province/State:')).toBeInTheDocument();
    expect(
      screen.getByText(mockOrderDetails.provinceState),
    ).toBeInTheDocument();

    expect(screen.getByText('Country:')).toBeInTheDocument();
    expect(screen.getByText(mockOrderDetails.country)).toBeInTheDocument();

    expect(screen.getByText('Number of Drinks:')).toBeInTheDocument();
    expect(
      screen.getByText(mockOrderDetails.numberOfDrinks.toString()),
    ).toBeInTheDocument();
  });

  it('displays "Order not found." when orderDetails is not provided', () => {
    render(<OrderDetails orderDetails={undefined} />);

    // Check that the message "Order not found." is displayed
    expect(screen.getByText('Order not found.')).toBeInTheDocument();
  });

  it('contains a link that navigates to the home page', () => {
    render(<OrderDetails orderDetails={mockOrderDetails} />);

    // Check that the link to go back to the order form is present
    const linkElement = screen.getByRole('link', {
      name: /Go back to order form/i,
    });

    // Ensure the link has the correct href
    expect(linkElement).toHaveAttribute('href', '/');
  });

  it('matches the snapshot when orderDetails are provided', () => {
    const { asFragment } = render(
      <OrderDetails orderDetails={mockOrderDetails} />,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('matches the snapshot when no orderDetails are provided', () => {
    const { asFragment } = render(<OrderDetails orderDetails={undefined} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
