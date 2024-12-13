import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { LabelInput } from '../LabelInput';

describe('LabelInput Component', () => {
  it('renders label and input correctly', () => {
    render(<LabelInput labelFor="username" labelText="Username" />);

    const labelElement = screen.getByTestId('LabelInputLabel-username');
    const inputElement = screen.getByTestId('LabelInputInput-username');

    expect(labelElement).toBeInTheDocument();
    expect(labelElement).toHaveAttribute('for', 'username');
    expect(labelElement).toHaveTextContent('Username');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute('id', 'username');
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('renders input with correct type when inputType is provided', () => {
    render(<LabelInput labelFor="email" labelText="Email" inputType="email" />);

    const inputElement = screen.getByTestId('LabelInputInput-email');
    expect(inputElement).toHaveAttribute('type', 'email');
  });

  it('renders input with default type of text if inputType is not provided', () => {
    render(<LabelInput labelFor="username" labelText="Username" />);

    const inputElement = screen.getByTestId('LabelInputInput-username');
    expect(inputElement).toHaveAttribute('type', 'text');
  });

  it('passes extra props to the input element', () => {
    render(
      <LabelInput
        labelFor="password"
        labelText="Password"
        placeholder="Enter your password"
      />,
    );

    const inputElement = screen.getByTestId('LabelInputInput-password');
    expect(inputElement).toHaveAttribute('placeholder', 'Enter your password');
  });

  it('handles user input correctly', () => {
    render(<LabelInput labelFor="username" labelText="Username" />);

    const inputElement: HTMLInputElement = screen.getByTestId(
      'LabelInputInput-username',
    );
    fireEvent.change(inputElement, { target: { value: 'testuser' } });

    expect(inputElement.value).toBe('testuser');
  });

  it('renders correctly with custom classes (styling test)', () => {
    render(<LabelInput labelFor="email" labelText="Email" />);

    const labelElement = screen.getByTestId('LabelInputLabel-email');
    const inputElement = screen.getByTestId('LabelInputInput-email');

    expect(labelElement).toHaveClass('text-sm/6 font-medium text-gray-900');
    expect(inputElement).toHaveClass(
      'block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6',
    );
  });
});
