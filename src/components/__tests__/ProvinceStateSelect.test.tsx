import '@testing-library/jest-dom';

import { fireEvent, render, screen } from '@testing-library/react';

import { ProvinceStateSelect } from '../ProvinceStateSelect';

describe('ProvinceStateSelect Component', () => {
  it('renders the component with all provinces and states', () => {
    render(
      <ProvinceStateSelect
        labelFor="provinceState"
        labelText="Province / State*"
      />,
    );

    // Check that the dropdown contains the "Select a Province / State" option
    expect(screen.getByText('Select a Province / State')).toBeInTheDocument();

    // Check that the provinces optgroup is present
    const provincesOptgroup = screen.getByTestId(
      'ProvinceStateSelect-Provinces',
    );
    expect(provincesOptgroup).toBeInTheDocument();
    expect(screen.getByText('Alberta')).toBeInTheDocument();
    expect(screen.getByText('British Columbia')).toBeInTheDocument();

    // Check that the states optgroup is present
    const statesOptgroup = screen.getByTestId('ProvinceStateSelect-States');
    expect(statesOptgroup).toBeInTheDocument();
    expect(screen.getByText('California')).toBeInTheDocument();
    expect(screen.getByText('Texas')).toBeInTheDocument();
  });

  it('should allow a user to select a province', () => {
    render(
      <ProvinceStateSelect
        labelFor="provinceState"
        labelText="Province / State*"
      />,
    );

    // Simulate selecting a province
    fireEvent.change(screen.getByLabelText('Province / State*'), {
      target: { value: 'AB' },
    });

    // Check that the correct province (Alberta) is selected
    expect(screen.getByLabelText('Province / State*')).toHaveValue('AB');
  });

  it('should allow a user to select a state', () => {
    render(
      <ProvinceStateSelect
        labelFor="provinceState"
        labelText="Province / State*"
      />,
    );

    // Simulate selecting a state
    fireEvent.change(screen.getByLabelText('Province / State*'), {
      target: { value: 'CA' },
    });

    // Check that the correct state (California) is selected
    expect(screen.getByLabelText('Province / State*')).toHaveValue('CA');
  });

  it('should render the correct label text', () => {
    render(
      <ProvinceStateSelect
        labelFor="provinceState"
        labelText="Province / State*"
      />,
    );

    // Check if the label is rendered correctly
    expect(screen.getByLabelText('Province / State*')).toBeInTheDocument();
  });

  it('should pass custom props to LabelSelect', () => {
    render(
      <ProvinceStateSelect
        labelFor="provinceState"
        labelText="Province / State*"
        className="custom-class"
      />,
    );

    // Check that the custom class is applied to the LabelSelect component
    expect(screen.getByLabelText('Province / State*')).toHaveClass(
      'custom-class',
    );
  });
});
