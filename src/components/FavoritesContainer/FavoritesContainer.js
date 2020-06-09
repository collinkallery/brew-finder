import React from "react";
import styled from "styled-components";
import {GlobalStyle, darkTheme} from "../../theme/globalStyle";
import Brewery from '../Brewery/Brewery';
import PropTypes from "prop-types";

const {
  background,
  secondaryBackground,
  textColorGrey,
  textColorWhite,
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
          setFavorites={props.setFavorites}
          favorites={props.favorites}
          setToVisits={props.setToVisits}
          toVisit={props.toVisit}
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
          <h3>You don't have any favorites yet!</h3> :
          favoritesToDisplay()
        }
      </FavoriteWrapper>
    </Wrapper>
  )
}

FavoritesContainer.propTypes = {
  favorites: PropTypes.array,
  setFavorites: PropTypes.func,
  toVisit: PropTypes.array,
  setToVisits: PropTypes.func
};

export default FavoritesContainer;
