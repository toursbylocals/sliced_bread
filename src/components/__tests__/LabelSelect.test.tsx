import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { LabelSelect } from '../LabelSelect';

describe('LabelSelect Component', () => {
  it('renders label and select correctly', () => {
    render(
      <LabelSelect labelFor="color" labelText="Choose a color">
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
      </LabelSelect>,
    );

    const labelElement = screen.getByTestId('LabelSelectLabel-color');
    const selectElement = screen.getByTestId('LabelSelectSelect-color'); // Access by testid

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', 'color');
    expect(labelElement).toHaveTextContent('Choose a color');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveAttribute('id', 'color');
    expect(selectElement).toHaveTextContent('RedBlueGreen');
  });

  it('renders select with options correctly', () => {
    render(
      <LabelSelect labelFor="fruit" labelText="Choose a fruit" name="fruit">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </LabelSelect>,
    );

    const selectElement = screen.getByTestId('LabelSelectSelect-fruit');
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(3);
    expect(options[0]).toHaveTextContent('Apple');
    expect(options[1]).toHaveTextContent('Banana');
    expect(options[2]).toHaveTextContent('Orange');
  });

  it('passes extra props to the select element', () => {
    render(
      <LabelSelect labelFor="size" labelText="Select Size" name="size" multiple>
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </LabelSelect>,
    );

    const selectElement = screen.getByTestId('LabelSelectSelect-size');
    expect(selectElement).toBeInTheDocument();
    expect(selectElement).toHaveAttribute('name', 'size');
    expect(selectElement).toHaveAttribute('multiple');
  });

  it('handles user selection correctly', () => {
    render(
      <LabelSelect labelFor="fruit" labelText="Choose a fruit" name="fruit">
        <option value="apple">Apple</option>
        <option value="banana">Banana</option>
        <option value="orange">Orange</option>
      </LabelSelect>,
    );

    const selectElement: HTMLSelectElement = screen.getByTestId(
      'LabelSelectSelect-fruit',
    );
    fireEvent.change(selectElement, { target: { value: 'banana' } });

    expect(selectElement.value).toBe('banana');
  });

  it('renders correctly with custom classes (styling test)', () => {
    render(
      <LabelSelect labelFor="color" labelText="Choose a color" name="color">
        <option value="red">Red</option>
        <option value="blue">Blue</option>
      </LabelSelect>,
    );

    const labelElement = screen.getByTestId('LabelSelectLabel-color');
    const selectElement = screen.getByTestId('LabelSelectSelect-color');

    expect(labelElement).toHaveClass('text-sm/6 font-medium text-gray-900');
    expect(selectElement).toHaveClass(
      'w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6',
    );
  });
});
