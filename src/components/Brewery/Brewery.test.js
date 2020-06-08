import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from 'react-router-dom';
import Brewery from './Brewery';

describe('Brewery', () => {

  const pub1 = {
    id: 1,
    name: 'Ratio Beerworks',
    street: '123 Main Street',
    city: 'Denver',
    state: 'Colorado',
    phone: 3031231234,
  }
  const mockSetFavorites = jest.fn();
  const mockSetToVisits = jest.fn();
  const favorites = [];
  const toVisit = [];

  it('should render without crashing', () => {
    const {getByText} = render(
      <MemoryRouter>
        <Brewery
          pub={pub1}
          key={1}
          setFavorites={mockSetFavorites}
          favorites={favorites}
          setToVisits={mockSetToVisits}
          toVisit={toVisit}
        />
      </MemoryRouter>
    )
    const brewHeader = getByText('Ratio Beerworks');

    expect(brewHeader).toBeInTheDocument();
  });

  it('should render two buttons', () => {
    const {getByText} = render(
      <MemoryRouter>
        <Brewery
          pub={pub1}
          key={1}
          setFavorites={mockSetFavorites}
          favorites={favorites}
          setToVisits={mockSetToVisits}
          toVisit={toVisit}
        />
      </MemoryRouter>
    )
    const faveButton = getByText('Favorite this Brewery');
    const toVisitButton = getByText('Add to Visit List');

    expect(faveButton).toBeInTheDocument();
    expect(toVisitButton).toBeInTheDocument();
  });

  it('should have two clickable buttons', () => {
    const {getByText} = render(
      <MemoryRouter>
        <Brewery
          pub={pub1}
          key={1}
          setFavorites={mockSetFavorites}
          favorites={favorites}
          setToVisits={mockSetToVisits}
          toVisit={toVisit}
        />
      </MemoryRouter>
    )
    const faveButton = getByText('Favorite this Brewery');
    const toVisitButton = getByText('Add to Visit List');

    fireEvent.click(faveButton);
    expect(mockSetFavorites).toHaveBeenCalled();

    fireEvent.click(toVisitButton);
    expect(mockSetToVisits).toHaveBeenCalled();
  });
});
