import React, {Component} from "react";
import styled from "styled-components";
import Brewery from '../Brewery/Brewery';
import {fetchByCity, fetchByState, fetchByZip} from '../../apiCalls';
import {GlobalStyle, darkTheme} from "../../theme/globalStyle";
import {Route, Link} from "react-router-dom";
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

const PubWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 4%;
`

const ErrorWrapper = styled.section`
  text-align: center;
  margin: auto;
  border-top: 1px solid ${accent};
  border-bottom: 1px solid ${accent};
  width: 90%;

  h3 {
    font-size: 2.4em;
    padding: 8%;
    margin: 5%;
  }
`

const HomeLink = styled(Link)`
  background-color: ${secondaryBackground};
  border: 1px solid ${accent};
  width: 40%;
  margin-top: 15%;
  padding: 3%;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
  color: ${textColorWhite};
  font-size: 1em;
`

class BreweryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breweries: []
    }
  }

  pubsToDisplay = () => {
    const pubs = this.state.breweries.map(pub => {
      return (
        <Brewery
          pub={pub}
          key={pub.id}
          setFavorites={this.props.setFavorites}
          favorites={this.props.favorites}
          setToVisits={this.props.setToVisits}
          toVisit={this.props.toVisit}
        />
      )
    })
    return pubs;
  }

  componentDidMount = async () => {
    if (this.props.searchType === 'City') {
      await fetchByCity(this.props.searchLocation)
        .then(data => this.setState({
          breweries: data
        }))
    } else if (this.props.searchType === 'State') {
      await fetchByState(this.props.searchLocation)
        .then(data => this.setState({
          breweries: data
        }))
        .then(data => this.pubsToDisplay)
    } else if (this.props.searchType === 'Zip Code') {
      await fetchByZip(this.props.searchLocation)
        .then(data => this.setState({
          breweries: data
        }))
        .then(data => this.pubsToDisplay)
    }
  }

  validateFetch = () => {
    if (this.state.breweries.length < 1) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    return (
      <Wrapper>
      {this.validateFetch() ?
        <section>
          <h2>Breweries in {this.props.searchLocation}</h2>
          <PubWrapper>
            {this.pubsToDisplay()}
          </PubWrapper>
        </section> :
        <ErrorWrapper>
          <h3>Oops. We didn't find any breweries with that location. Try searching again!</h3>
          <HomeLink to="/">Back Home</HomeLink>
        </ErrorWrapper>
      }
      </Wrapper>
    )
  }
}

BreweryContainer.propTypes = {
  searchType: PropTypes.string,
  searchLocation: PropTypes.string,
  setFavorites: PropTypes.func,
  favorites: PropTypes.array,
  setToVisits: PropTypes.func,
  toVisit: PropTypes.array
};

export default BreweryContainer;
