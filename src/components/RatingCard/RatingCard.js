import React, {useState, useEffect} from "react";
import styled from "styled-components";
import {GlobalStyle, darkTheme} from "../../theme/globalStyle";
import {Route} from "react-router-dom";

const {
  background,
  secondaryBackground,
  textColorGrey,
  textColorWhite,
  accent
} = darkTheme;

const Wrapper = styled.section`
  width: 95%;
  border: 1px solid ${secondaryBackground};
  margin: 2%;
  padding: 2%;
  text-align: center;
`
const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  button.rating-button {
    width: 100%;
    background-color: ${secondaryBackground};
    font-size: .9em;
    border: 1px solid ${accent};
    color: ${textColorWhite};
    margin: 2%;
    padding: 2%;
    border-radius: 5px;
    font-family: 'Barlow Condensed', sans-serif;
  }
`

const RatingCard = (props) => {

  const [hasRated, setHasRated] = useState(false);

  const handleRatingClick = (id) => {
    setHasRated(true);
    props.setRating(id);
  }

  return (
    <Wrapper>
        {!props.hasRatedYet ?
          <ButtonWrapper>
            <p>Overall, how would you rate your experience at {props.pub.name}?</p>
            <button
              className="rating-button"
              onClick={() => handleRatingClick(1)}>
              1 - Awful, never going back!
            </button>
            <button
              className="rating-button"
              onClick={() => handleRatingClick(2)}>
              2 - Definitely not my favorite.
            </button>
            <button
              className="rating-button"
              onClick={() => handleRatingClick(3)}>
              3 - Not too bad, could be better.
            </button>
            <button
              className="rating-button"
              onClick={() => handleRatingClick(4)}>
              4 - Awesome Pub, would go back.
            </button>
            <button
              className="rating-button"
              onClick={() => handleRatingClick(5)}>
              5 - One of my favorite breweries ever!
            </button>
          </ButtonWrapper> :
        <p>Your rating has been stored</p>}
    </Wrapper>
  )
}

export default RatingCard;
