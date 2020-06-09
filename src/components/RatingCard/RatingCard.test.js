import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import {MemoryRouter} from 'react-router-dom';
import RatingCard from './RatingCard';

describe('Rating Card', () => {

  const pub1 = {
    id: 1,
    name: 'Ratio Beerworks',
    street: '123 Main Street',
    city: 'Denver',
    state: 'Colorado',
    phone: 3031231234
  };

  const mockSetRating = jest.fn();

  it('should render without crashing', () => {

    const {getByText} = render(
      <MemoryRouter>
        <RatingCard
          pub={pub1}
          setRating={mockSetRating}
          hasRatedYet={false}
        />
      </MemoryRouter>
    )

    const ratingHeader = getByText('Overall, how would you rate your experience at Ratio Beerworks?');

    expect(ratingHeader).toBeInTheDocument();
  });

  it('should have five rating buttons', () => {

    const {getByText, getAllByRole} = render(
      <MemoryRouter>
        <RatingCard
          pub={pub1}
          setRating={mockSetRating}
          hasRatedYet={false}
        />
      </MemoryRouter>
    )

    const ratingButtons = getAllByRole('button');

    expect(ratingButtons[0]).toBeInTheDocument();
  });

  it('should be a clickable rating button', () => {

    const {getByText, getAllByRole} = render(
      <MemoryRouter>
        <RatingCard
          pub={pub1}
          setRating={mockSetRating}
          hasRatedYet={false}
        />
      </MemoryRouter>
    )

    const ratingButtons = getAllByRole('button');
    fireEvent.click(ratingButtons[0]);

    expect(mockSetRating).toHaveBeenCalled();
  });
});
