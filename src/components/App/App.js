import React, {Component} from "react";
import styled from "styled-components";
import BreweryContainer from '../BreweryContainer/BreweryContainer';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import {fetchByCity} from '../../apiCalls';
import {GlobalStyle, darkTheme} from "../../theme/globalStyle";
import {Route} from "react-router-dom";

const {
  background,
  secondaryBackground,
  textColorGrey,
  textColorWhite,
  accent
} = darkTheme;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchType: '',
      searchLocation: '',
      hasSearched: false,
      favorites: [],
      toVist: []
    }
  }

  setSearch = (searchValues) => {
    this.setState({
      searchType: searchValues.locationType,
      searchLocation: searchValues.location,
      hasSearched: true
    })
  }

  setFavorites = (newFavorite) => {
    const allIDs = this.state.favorites.reduce((acc, favorite) => {
      acc.push(favorite.id);
      return acc;
    }, []);
    if (!allIDs.includes(newFavorite.id)) {
      this.saveFavorite(newFavorite);
    } else {
      this.removeFromSaved(newFavorite);
    }
  };

  saveFavorite = (favorite) => {
    this.setState({
      favorites: [...this.state.favorites, favorite],
    });
  };

  removeFromSaved = (favoriteToRemove) => {
    const newFavorites = this.state.favorites.filter((favorite) => {
      return favorite.id !== favoriteToRemove.id;
    });
    this.setState({
      favorites: newFavorites,
    });
  };

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <NavBar />
        <Route
          path="/"
          exact
          render={() => {
            return (
              <Search setSearch={this.setSearch} />
            )
          }}
        />
        <Route
          path='/favorites'
          exact
          render={() => {
            return (
              <FavoritesContainer
                favorites={this.state.favorites}
                setFavorites={this.setFavorites}
              />
            )
          }}
        />
        <Route
          path="/breweries/:location"
          exact
          render={() => {
            return (
              <BreweryContainer
                searchType={this.state.searchType}
                searchLocation={this.state.searchLocation}
                setFavorites={this.setFavorites}
                favorites={this.state.favorites}
              />
            )
          }}
        />
      </Wrapper>
    )
  }
}

export default App;
