import React, {Component} from "react";
import styled from "styled-components";
import Brewery from '../Brewery/Brewery';
import {fetchByCity, fetchByState, fetchByZip} from '../../apiCalls';
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

  render() {
    return (
      <Wrapper>
        <h2>Breweries in {this.props.searchLocation}</h2>
        <PubWrapper>
          {this.pubsToDisplay()}
        </PubWrapper>
      </Wrapper>
    )
  }
}

export default BreweryContainer;
