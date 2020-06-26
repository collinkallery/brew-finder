import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from 'react-router-dom';
import Search from './Search';

describe('Search', () => {

  const mockSetSearch = jest.fn();

  it('should render without crashing', () => {
    const {getByText} = render(
      <MemoryRouter>
        <Search setSearch={mockSetSearch} />
      </MemoryRouter>
    )

    const header = getByText('Lover of all things beer? Welcome to Brew Finder! Throw in your city, state, or zipcode to see some of the most popular breweries in your location!');

    expect(header).toBeInTheDocument();
  });

  it('should have two inputs', () => {
    const {getByText, getByDisplayValue, getByPlaceholderText} = render(
      <MemoryRouter>
        <Search setSearch={mockSetSearch} />
      </MemoryRouter>
    )

    const input1 = getByDisplayValue('Pick Location Type');
    expect(input1).toBeInTheDocument();

    const input2 = getByPlaceholderText('Location by city, state, or zip code');
    expect(input2).toBeInTheDocument();
  });

  it.skip('should have a button to submit the form', () => {
    const {getByText} = render(
      <MemoryRouter>
        <Search setSearch={mockSetSearch} />
      </MemoryRouter>
    )

    const submitButton = getByText('Let\'s Go!');

    expect(submitButton).toBeInTheDocument();
  });

  it('should track the inputs', () => {
    const {getByText, getByPlaceholderText} = render(
      <MemoryRouter>
        <Search setSearch={mockSetSearch} />
      </MemoryRouter>
    )

    const locationInput = getByPlaceholderText('Location by city, state, or zip code');

    fireEvent.change(locationInput, {target: {value: 'Denver'}});
    expect(locationInput.value).toEqual('Denver');
  });

  it.skip('should have a clickable submit button', () => {
    const {getByText} = render(
      <MemoryRouter>
        <Search setSearch={mockSetSearch} />
      </MemoryRouter>
    )

    const submitButton = getByText('Let\'s Go!');

    fireEvent.click(submitButton);

    expect(mockSetSearch).toHaveBeenCalled();
  });
});
