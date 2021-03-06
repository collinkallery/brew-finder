import React from "react";
import styled from "styled-components";
import {darkTheme} from "../../theme/globalStyle";
import Brewery from '../Brewery/Brewery';
import PropTypes from "prop-types";

const {
  secondaryBackground,
  accent
} = darkTheme;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85%;
  padding: 3%;
  overflow: scroll;

  h2 {
    font-size: 2.5em;
    text-align: center;
    border-bottom: 1px solid ${secondaryBackground}
  }
  h4 {
    text-align: center;
    margin: auto;
    border-top: 1px solid ${accent};
    border-bottom: 1px solid ${accent};
    width: 90%;
    padding: 10%;
    font-size: 2.3em;
  }
`

const FavoriteWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 4%;
`

const FavoritesContainer = (props) => {

  const favoritesToDisplay = () => {
    const favorites = props.favorites.map(favorite => {
      return (
        <Brewery
          pub={favorite}
          key={favorite.id}
          favorites={props.favorites}
          toVisit={props.toVisit}
          updateFavoritesAndVisits={props.updateFavoritesAndVisits}
        />
      )
    })
    return favorites;
  }
  return (
    <Wrapper>
      <h2>Your Favorite Pubs</h2>
      <FavoriteWrapper>
        {props.favorites.length === 0 ?
          <h4>You don't have any favorites yet!</h4> :
          favoritesToDisplay()
        }
      </FavoriteWrapper>
    </Wrapper>
  )
}

FavoritesContainer.propTypes = {
  favorites: PropTypes.array,
  toVisit: PropTypes.array,
  updateFavoritesAndVisits: PropTypes.func
};

export default FavoritesContainer;
