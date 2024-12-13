import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';

import { DrinkInfo } from '../DrinkInfo';

describe('DrinkInfo Component', () => {
  it('renders the image correctly', () => {
    render(<DrinkInfo />);

    const imageElement = screen.getByTestId('drinkinfo-photo');
    expect(imageElement).toBeInTheDocument();
    const img = imageElement.querySelector('img');
    expect(img).toHaveAttribute('src', '/drink.jpg');
    expect(img).toHaveAttribute('alt', 'Spicy Manhattan');
    expect(img).toHaveAttribute('height', '360');
    expect(img).toHaveAttribute('width', '237');
  });

  it('renders the title "Spicy Manhattan"', () => {
    render(<DrinkInfo />);

    const titleElement = screen.getByTestId('drinkinfo-title');
    expect(titleElement).toBeInTheDocument();
    expect(titleElement).toHaveTextContent('Spicy Manhattan');
    expect(titleElement).toHaveClass(
      'text-2xl font-semibold text-gray-800 mb-4',
    );
  });

  it('renders the description text', () => {
    render(<DrinkInfo />);

    const descriptionElement = screen.getByTestId('drinkinfo-description');
    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement).toHaveTextContent(
      /A Spicy Manhattan is a bold twist on the classic cocktail/,
    );
    expect(descriptionElement).toHaveClass('text-gray-600');
  });
});
