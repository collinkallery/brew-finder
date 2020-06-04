import React, {Component} from "react";
import styled from "styled-components";
import BreweryContainer from '../BreweryContainer/BreweryContainer';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
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
      hasSearched: false
    }
  }

  setSearch = (searchValues) => {
    console.log('SV', searchValues);
    this.setState({
      searchType: searchValues.locationType,
      searchLocation: searchValues.location,
      hasSearched: true
    })
  }

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
          path="/breweries/:location"
          exact
          render={() => {
            return (
              <BreweryContainer
                searchType={this.state.searchType}
                searchLocation={this.state.searchLocation}
              />
            )
          }}
        />
      </Wrapper>
    )
  }
}

export default App;
