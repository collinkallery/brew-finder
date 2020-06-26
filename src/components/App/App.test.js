import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent, waitForElement} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from 'react-router-dom';
import App from './App';
import {fetchByCity, fetchByState, fetchByZip} from '../../apiCalls';

jest.mock('../../apiCalls');

describe('App', () => {

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

  it('should render without crashing', () => {
    const {getByText} = render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const header = getByText('Brew Finder');

    expect(header).toBeInTheDocument();
  });

  it.skip('should navigate to the breweries page after filling out form', () => {

    fetchByCity.mockResolvedValueOnce(pubs);

    const {getByText, getByPlaceholderText, getByDisplayValue} = render (
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const searchTypeInput = getByDisplayValue('Pick Location Type');
    fireEvent.change(searchTypeInput, {target: {value: 'City'}});

    const searchLocationInput = getByPlaceholderText('Location by city, state, or zip code');
    fireEvent.change(searchLocationInput, {target: {value: 'Denver'}});

    const submitButton = getByText('Let\'s Go!');
    fireEvent.click(submitButton);

    const brewHeader = getByText('Breweries in Denver');
    expect(brewHeader).toBeInTheDocument();
  });

  it('should be able to favorite a given brewery', async () => {

    fetchByCity.mockResolvedValueOnce(pubs);

    const {getByText, getByPlaceholderText, getByDisplayValue, getAllByText} = render (
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const searchTypeInput = getByDisplayValue('Pick Location Type');
    fireEvent.change(searchTypeInput, {target: {value: 'City'}});

    const searchLocationInput = getByPlaceholderText('Location by city, state, or zip code');
    fireEvent.change(searchLocationInput, {target: {value: 'Denver'}});

    const submitButton = getByText('Let\'s Go!');
    fireEvent.click(submitButton);

    const faveButtons = await waitForElement(() => {
      return getAllByText('Favorite this Brewery');
    });

    fireEvent.click(faveButtons[0]);

    const unfaveButtons = getAllByText('Remove from Favorites');
    expect(unfaveButtons[0]).toBeInTheDocument();

    const favoritesContainerButton = getByText('Favorites');

    fireEvent.click(favoritesContainerButton);

    const brew1header = getByText('Ratio Beerworks');
    expect(brew1header).toBeInTheDocument();
  });

  it('should be able to add a brewery to upcoming visits', async () => {

    fetchByCity.mockResolvedValueOnce(pubs);

    const {getByText, getByPlaceholderText, getByDisplayValue, getAllByText} = render (
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const searchTypeInput = getByDisplayValue('Pick Location Type');
    fireEvent.change(searchTypeInput, {target: {value: 'City'}});

    const searchLocationInput = getByPlaceholderText('Location by city, state, or zip code');
    fireEvent.change(searchLocationInput, {target: {value: 'Denver'}});

    const submitButton = getByText('Let\'s Go!');
    fireEvent.click(submitButton);

    const visitButtons = await waitForElement(() => {
      return getAllByText('Add to Visit List');
    });

    fireEvent.click(visitButtons[0]);

    const unvisitButtons = getAllByText('Remove from Visits');
    expect(unvisitButtons[0]).toBeInTheDocument();

    const visitContainerButton = getByText('Pubs to Visit');

    fireEvent.click(visitContainerButton);

    const brew1header = getByText('Ratio Beerworks');
    expect(brew1header).toBeInTheDocument();
  });

  it('should be able to remove a brewery from favorites', async () => {

    fetchByCity.mockResolvedValueOnce(pubs);

    const {getByText, getByPlaceholderText, getByDisplayValue, getAllByText} = render (
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const searchTypeInput = getByDisplayValue('Pick Location Type');
    fireEvent.change(searchTypeInput, {target: {value: 'City'}});

    const searchLocationInput = getByPlaceholderText('Location by city, state, or zip code');
    fireEvent.change(searchLocationInput, {target: {value: 'Denver'}});

    const submitButton = getByText('Let\'s Go!');
    fireEvent.click(submitButton);

    const faveButtons = await waitForElement(() => {
      return getAllByText('Favorite this Brewery');
    });

    fireEvent.click(faveButtons[0]);

    const unfaveButtons = getAllByText('Remove from Favorites');
    fireEvent.click(unfaveButtons[0]);

    const favoritesPageButton = getByText('Favorites');
    fireEvent.click(favoritesPageButton);

    const noFavoritesMessage = getByText('You don\'t have any favorites yet!');
    expect(noFavoritesMessage).toBeInTheDocument();
  });

  it('should be able to navigate back to the home page', async () => {

    fetchByCity.mockResolvedValueOnce(pubs);

    const {getByText, getByPlaceholderText, getByDisplayValue, getAllByText} = render (
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const searchTypeInput = getByDisplayValue('Pick Location Type');
    fireEvent.change(searchTypeInput, {target: {value: 'City'}});

    const searchLocationInput = getByPlaceholderText('Location by city, state, or zip code');
    fireEvent.change(searchLocationInput, {target: {value: 'Denver'}});

    const submitButton = getByText('Let\'s Go!');
    fireEvent.click(submitButton);

    const brewHeader1 = await waitForElement(() => {
      return getByText('Ratio Beerworks');
    });

    const homeButton = getByText('Home');

    fireEvent.click(homeButton);

    const description = getByText('Lover of all things beer? Welcome to Brew Finder! Throw in your city, state, or zipcode to see some of the most popular breweries in your location!');

    expect(description).toBeInTheDocument();
  });

  it('should be able to search by zipcode', async () => {

    fetchByZip.mockResolvedValueOnce(pubs);

    const {getByText, getByPlaceholderText, getByDisplayValue, getAllByText} = render (
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const searchTypeInput = getByDisplayValue('Pick Location Type');
    fireEvent.change(searchTypeInput, {target: {value: 'Zip Code'}});

    const searchLocationInput = getByPlaceholderText('Location by city, state, or zip code');
    fireEvent.change(searchLocationInput, {target: {value: '80205'}});

    const submitButton = getByText('Let\'s Go!');
    fireEvent.click(submitButton);

    const brewHeader1 = await waitForElement(() => {
      return getByText('Ratio Beerworks');
    });

    expect(brewHeader1).toBeInTheDocument();
  });

  it('should be able to search by state', async () => {

    fetchByState.mockResolvedValueOnce(pubs);

    const {getByText, getByPlaceholderText, getByDisplayValue, getAllByText} = render (
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )

    const searchTypeInput = getByDisplayValue('Pick Location Type');
    fireEvent.change(searchTypeInput, {target: {value: 'State'}});

    const searchLocationInput = getByPlaceholderText('Location by city, state, or zip code');
    fireEvent.change(searchLocationInput, {target: {value: 'Colorado'}});

    const submitButton = getByText('Let\'s Go!');
    fireEvent.click(submitButton);

    const brewHeader1 = await waitForElement(() => {
      return getByText('Ratio Beerworks');
    });

    expect(brewHeader1).toBeInTheDocument();
  });
});
