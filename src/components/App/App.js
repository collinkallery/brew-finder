import React, {Component} from "react";
import styled from "styled-components";
import BreweryContainer from '../BreweryContainer/BreweryContainer';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import FavoritesContainer from '../FavoritesContainer/FavoritesContainer';
import ToVisitContainer from '../ToVisitContainer/ToVisitContainer';
import {GlobalStyle, darkTheme} from "../../theme/globalStyle";
import {Route, Switch} from "react-router-dom";

const {
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

  updateFavoritesAndVisits = (newPub, stateKey) => {
    const allIDs = this.state[stateKey].reduce((acc, pub) => {
      acc.push(pub.id);
      return acc;
    }, []);
    if (!allIDs.includes(newPub.id)) {
      this.savePub(newPub, stateKey);
    } else {
      this.removePub(newPub, stateKey)
    }
  }

  savePub = (pubToAdd, stateKey) => {
    this.setState({
      [stateKey]: [...this.state[stateKey], pubToAdd]
    });
  };

  removePub = (pubToRemove, stateKey) => {
    const newPubs = this.state[stateKey].filter((pub) => {
      return pub.id !== pubToRemove.id;
    });
    this.setState({
      [stateKey]: newPubs
    });
  };

  noMatchPage = () => {
    return (
      <ErrorWrapper>
        <h3>404 - Looks like there's no beer here...</h3>
      </ErrorWrapper>
    )
  }

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <NavBar />
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
                  toVisit={this.state.toVisit}
                  updateFavoritesAndVisits={this.updateFavoritesAndVisits}
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
                  toVisit={this.state.toVisit}
                  updateFavoritesAndVisits={this.updateFavoritesAndVisits}
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
                  favorites={this.state.favorites}
                  toVisit={this.state.toVisit}
                  updateFavoritesAndVisits={this.updateFavoritesAndVisits}
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
