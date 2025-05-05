import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../page';

// Mock external data and functions
jest.mock('../util/utils', () => ({
  generateUsername: jest.fn().mockReturnValue('GeneratedUser123'),
}));

jest.mock('../data/reviews', () => ({
  reviews: [
    { name: 'John', review: 'Great water!' },
    { name: 'Jane', review: 'Perfectly neutral.' },
  ],
}));

describe('Home', () => {
  it('renders the page title and description', () => {
    render(<Home />);
    
    // Check if title and description are rendered
    const title = screen.getByText(/Room Temperature Water/i);
    const description = screen.getByText(/Just water. Nothing added. Nothing removed. Not cold. Not hot./i);

    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it('renders the image correctly', () => {
    render(<Home />);
    
    const image = screen.getByAltText('Room Temperature Water');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', '/water.jpg');
  });

  it('renders reviews correctly', () => {
    render(<Home />);
  
    expect(screen.getByText(/Great water!/i)).toBeInTheDocument();
    expect(screen.getByText(/Perfectly neutral./i)).toBeInTheDocument();
  
    const reviewTexts = screen.getAllByText(/Great water!|Perfectly neutral./i);
    expect(reviewTexts).toHaveLength(2);
  });

  it('handles form submission error correctly', async () => {
    // Mock fetch API to return an error response
    global.fetch = jest.fn().mockResolvedValue({
      ok: false,
      json: jest.fn().mockResolvedValue({ error: 'Something went wrong' }),
    });

    render(<Home />);

    const nameInput = screen.getByPlaceholderText(/Your name \(optional\)/i);
    const quantityInput = screen.getByPlaceholderText(/Quantity \(optional\)/i);
    const cityInput = screen.getByPlaceholderText(/City/i);
    const provinceInput = screen.getByPlaceholderText(/State\/Province/i);
    const countryInput = screen.getByPlaceholderText(/Country/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(quantityInput, { target: { value: '3' } });
    fireEvent.change(cityInput, { target: { value: 'New York' } });
    fireEvent.change(provinceInput, { target: { value: 'NY' } });
    fireEvent.change(countryInput, { target: { value: 'USA' } });

    const button = screen.getByText(/Hydrate Me/i);
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText('Oops. Something went wrong.')).toBeInTheDocument();
    });
  });
});