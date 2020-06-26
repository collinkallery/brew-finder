import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from 'react-router-dom';
import BreweryToVisit from './BreweryToVisit';

describe('Brewery to Visit', () => {
  const pub1 = {
    id: 1,
    name: 'Ratio Beerworks',
    street: '123 Main Street',
    city: 'Denver',
    state: 'Colorado',
    phone: 3031231234
  }
  const mockSetFavorites = jest.fn();
  const mockSetToVisits = jest.fn();
  const favorites = [];
  const toVisit = [pub1];

  it('should render without crashing', () => {

    const {getByText} = render(
      <MemoryRouter>
        <BreweryToVisit
          pub={pub1}
          key={pub1.id}
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

  it.skip('should have an add to visits button', () => {

    const {getByText} = render(
      <MemoryRouter>
        <BreweryToVisit
          pub={pub1}
          key={pub1.id}
          setFavorites={mockSetFavorites}
          favorites={favorites}
          setToVisits={mockSetToVisits}
          toVisit={toVisit}
        />
      </MemoryRouter>
    )

    const addButton = getByText('Add to Visits');

    expect(addButton).toBeInTheDocument();
  });

  it.skip('the add button should be clickable', () => {

    const {getByText} = render(
      <MemoryRouter>
        <BreweryToVisit
          pub={pub1}
          key={pub1.id}
          setFavorites={mockSetFavorites}
          favorites={favorites}
          setToVisits={mockSetToVisits}
          toVisit={toVisit}
        />
      </MemoryRouter>
    )

    const addButton = getByText('Add to Visits');
    fireEvent.click(addButton);

    const ratingButton = getByText('1 - Awful, never going back!');
    expect(ratingButton).toBeInTheDocument();
  });

  it.skip('should store the users rating on the dom', () => {

    const {getByText} = render(
      <MemoryRouter>
        <BreweryToVisit
          pub={pub1}
          key={pub1.id}
          setFavorites={mockSetFavorites}
          favorites={favorites}
          setToVisits={mockSetToVisits}
          toVisit={toVisit}
        />
      </MemoryRouter>
    )

    const addButton = getByText('Add to Visits');
    fireEvent.click(addButton);

    const ratingButton = getByText('1 - Awful, never going back!');
    fireEvent.click(ratingButton);

    const userRating = getByText('Your Rating: 1');
    expect(userRating).toBeInTheDocument();
  });
});
