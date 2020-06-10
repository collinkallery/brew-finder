import React from "react";
import styled from "styled-components";
import {darkTheme} from "../../theme/globalStyle";
import PropTypes from "prop-types";

const {
  secondaryBackground,
  textColorWhite,
  accent
} = darkTheme;

const Wrapper = styled.section`
  width: 85%;
  border: 1px solid ${secondaryBackground};
  margin: 2%;
  padding: 2%;

  h3 {
    font-size: 1.8em;
    text-align: center;
    border-bottom: 1px solid ${accent};
    padding-bottom: 2%;
  }
  p {
    margin: 2%;
  }
`

const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    width: 40%;
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

const Brewery = (props) => {

  const handleFavoritesAndVisits = (stateKey) => {
    if (props[stateKey].length > 0) {
      props[stateKey].forEach(pub => {
        if (pub.id === props.pub.id) {
          props.updateFavoritesAndVisits(props.pub, stateKey)
        } else {
          props.updateFavoritesAndVisits(props.pub, stateKey)
        }
      })
    } else {
      props.updateFavoritesAndVisits(props.pub, stateKey)
    }
  }

  const checkFavoritesAndVisits = (stateKey) => {
    if (props[stateKey].length > 0) {
      const item = props[stateKey].find(pub => {
        return pub.id === props.pub.id
      })
      return !item;
    } else {
      return true;
    }
  }

  return (
    <Wrapper>
      <h3>{props.pub.name}</h3>
      <section>
        <p>Brewery Type: {props.pub.brewery_type}</p>
        <p>Address: {props.pub.street}</p>
        <p>{props.pub.city}, {props.pub.state}</p>
        <p>Phone Number: {props.pub.phone}</p>
      </section>
      <ButtonWrapper>
        <button
          onClick={() => handleFavoritesAndVisits('favorites')}>
          {checkFavoritesAndVisits('favorites') ? 'Favorite this Brewery' : 'Remove from Favorites'}
        </button>
        <button
          onClick={() => handleFavoritesAndVisits('toVisit')}>
          {checkFavoritesAndVisits('toVisit') ? 'Add to Visit List' : 'Remove from Visits'}
        </button>
      </ButtonWrapper>
    </Wrapper>
  )
}

Brewery.propTypes = {
  pub: PropTypes.object,
  favorites: PropTypes.array,
  toVisit: PropTypes.array,
  updateFavoritesAndVisits: PropTypes.func,

};

export default Brewery;
