import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from 'react-router-dom';
import NavBar from './NavBar';

describe('Nav Bar', () => {

  it('should render without crashing', () => {

    const {getByText} = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )

    const header = getByText('Brew Finder');

    expect(header).toBeInTheDocument();
  });

  it('should render three buttons', () => {

    const {getByText} = render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    )

    const homeButton = getByText('Home');
    expect(homeButton).toBeInTheDocument();

    const faveButton = getByText('Favorites');
    expect(faveButton).toBeInTheDocument();

    const visitButton = getByText('Pubs to Visit');
    expect(visitButton).toBeInTheDocument();
  });

});
