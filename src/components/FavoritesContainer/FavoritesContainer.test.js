import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from 'react-router-dom';
import FavoritesContainer from './FavoritesContainer';
// import {fetchByCity, fetchByState, fetchByZip} from '../../apiCalls';

// jest.mock('../../apiCalls');

describe('Favorites Container', () => {

  const pub1 = {
    id: 1,
    name: 'Ratio Beerworks',
    street: '123 Main Street',
    city: 'Denver',
    state: 'Colorado',
    phone: 3031231234
  };

  const pub2 = {
    id: 2,
    name: 'Our Mutual Friend',
    street: '456 Blake Street',
    city: 'Denver',
    state: 'Colorado',
    phone: 3031231235
  };

  const pub3 = {
    id: 3,
    name: 'Local Beer Company',
    street: '789 Larimer Street',
    city: 'Denver',
    state: 'Colorado',
    phone: 3031231236
  };

  const pubs = [pub1, pub2, pub3];

  const mockSetFavorites = jest.fn();
  const mockSetToVisits = jest.fn();
  const favorites = pubs;
  const emptyFavorites = [];
  const toVisit = [];

  it('should render without crashing', () => {

    const {getByText} = render(
      <MemoryRouter>
        <FavoritesContainer
          setFavorites={mockSetFavorites}
          favorites={favorites}
          setToVisits={mockSetToVisits}
          toVisit={toVisit}
        />
      </MemoryRouter>
    )

    const header = getByText('Your Favorite Pubs');

    expect(header).toBeInTheDocument();
  });

  it('should render favorite breweries onto the DOM', () => {

    const {getByText} = render(
      <MemoryRouter>
        <FavoritesContainer
          setFavorites={mockSetFavorites}
          favorites={favorites}
          setToVisits={mockSetToVisits}
          toVisit={toVisit}
        />
      </MemoryRouter>
    )

    const header1 = getByText('Ratio Beerworks');
    expect(header1).toBeInTheDocument();

    const header2 = getByText('Our Mutual Friend');
    expect(header2).toBeInTheDocument();

    const header3 = getByText('Local Beer Company');
    expect(header3).toBeInTheDocument();
  });

  it('should give an tell the user if they have no favorites', () => {

    const {getByText} = render(
      <MemoryRouter>
        <FavoritesContainer
          setFavorites={mockSetFavorites}
          favorites={emptyFavorites}
          setToVisits={mockSetToVisits}
          toVisit={toVisit}
        />
      </MemoryRouter>
    )

    const noFavesHeader = getByText('You don\'t have any favorites yet!');

    expect(noFavesHeader).toBeInTheDocument();
  });
});
