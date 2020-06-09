import React, {Component} from "react";
import styled from "styled-components";
import BreweryContainer from '../BreweryContainer/BreweryContainer';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import ToVisitContainer from '../ToVisitContainer/ToVisitContainer';
import {fetchByCity} from '../../apiCalls';
import {GlobalStyle, darkTheme} from "../../theme/globalStyle";
import {Route, Switch, Redirect} from "react-router-dom";

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

const ErrorWrapper = styled.section`
  text-align: center;
  margin: auto;
  border-top: 1px solid ${accent};
  border-bottom: 1px solid ${accent};
  width: 90%;

  h3 {
    font-size: 2.4em;
    padding: 12%;
  }
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchType: '',
      searchLocation: '',
      hasSearched: false,
      favorites: [],
      toVisit: []
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
      favorites: [...this.state.favorites, favorite]
    });
  };

  removeFromSaved = (favoriteToRemove) => {
    const newFavorites = this.state.favorites.filter((favorite) => {
      return favorite.id !== favoriteToRemove.id;
    });
    this.setState({
      favorites: newFavorites
    });
  };

  setToVisits = (newPub) => {
    const allIDs = this.state.toVisit.reduce((acc, pub) => {
      acc.push(pub.id);
      return acc;
    }, []);
    if(!allIDs.includes(newPub.id)) {
      this.saveVisit(newPub);
    } else {
      this.removeFromVisits(newPub);
    }
  };

  saveVisit = (pub) => {
    this.setState({
      toVisit: [...this.state.toVisit, pub]
    });
  };

  removeFromVisits = (pubToRemove) => {
    const newVisits = this.state.toVisit.filter((pub) => {
      return pub.id !== pubToRemove.id;
    });
    this.setState({
      toVisit: newVisits
    });
  };

  noMatchPage = () => {
    return (
      <ErrorWrapper>
        <h3>404 - Looks like there's no beer here...</h3>
      </ErrorWrapper>
    )
  }

  resetSearch = () => {
    this.setState({
      hasSearched: false
    })
  }

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <NavBar resetSearch={this.resetSearch} />
        {!this.state.hasSearched ?
          <Redirect to="/" /> :
          <Redirect to="/breweries/:location" />
        }
        <Switch>
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
                  setToVisits={this.setToVisits}
                  toVisit={this.state.toVisit}
                />
              )
            }}
          />
          <Route
            path='/to-visit'
            exact
            render={() => {
              return (
                <ToVisitContainer
                  favorites={this.state.favorites}
                  setFavorites={this.setFavorites}
                  toVisit={this.state.toVisit}
                  setToVisits={this.setToVisits}
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
                  setToVisits={this.setToVisits}
                  toVisit={this.state.toVisit}
                />
              )
            }}
          />
          <Route component={this.noMatchPage} />
        </Switch>
      </Wrapper>
    )
  }
}

export default App;
