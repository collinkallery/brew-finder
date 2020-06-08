import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, waitForElement} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from 'react-router-dom';
import BreweryContainer from './BreweryContainer';
import {fetchByCity, fetchByState, fetchByZip} from '../../apiCalls';

jest.mock('../../apiCalls');

describe('Brewery Container', () => {

  const searchType = 'City'
  const searchLocation = 'Denver'
  const mockSetFavorites = jest.fn();
  const mockSetToVisits = jest.fn();
  const favorites = [];
  const toVisit = [];

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

  it('should render without crashing', async () => {

    fetchByCity.mockResolvedValueOnce(pubs);

    const {getByText} = render(
      <MemoryRouter>
        <BreweryContainer
          searchType={searchType}
          searchLocation={searchLocation}
          key={1}
          setFavorites={mockSetFavorites}
          favorites={favorites}
          setToVisits={mockSetToVisits}
          toVisit={toVisit}
        />
      </MemoryRouter>
    )

    const renderedPubHeader = await waitForElement(() => {
      return getByText('Ratio Beerworks');
    });

    expect(renderedPubHeader).toBeInTheDocument();
  });

  it('should have a header for the given location', async () => {

    fetchByCity.mockResolvedValueOnce(pubs);

    const {getByText} = render(
      <MemoryRouter>
        <BreweryContainer
          searchType={searchType}
          searchLocation={searchLocation}
          key={1}
          setFavorites={mockSetFavorites}
          favorites={favorites}
          setToVisits={mockSetToVisits}
          toVisit={toVisit}
        />
      </MemoryRouter>
    )

    const header = await waitForElement(() => {
      return getByText('Breweries in Denver');
    });

    expect(header).toBeInTheDocument();
  });

  it('should render all of the available breweries', async () => {

    fetchByCity.mockResolvedValueOnce(pubs);

    const {getByText, getAllByText} = render(
      <MemoryRouter>
        <BreweryContainer
          searchType={searchType}
          searchLocation={searchLocation}
          key={1}
          setFavorites={mockSetFavorites}
          favorites={favorites}
          setToVisits={mockSetToVisits}
          toVisit={toVisit}
        />
      </MemoryRouter>
    )

    const renderedPubs = await waitForElement(() => {
      return getAllByText('Brewery Type:');
    });

    expect(renderedPubs).toHaveLength(3);
  });
});
