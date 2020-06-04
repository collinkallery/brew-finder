import React, {Component} from "react";
import styled from "styled-components";
import Brewery from '../Brewery/Brewery';
import {fetchByCity, fetchByState, fetchByZip} from '../../apiCalls';
import {GlobalStyle, darkTheme} from "../../theme/globalStyle";
import {Route} from "react-router-dom";

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
        <Brewery {...pub} />
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
      <section>
        {this.pubsToDisplay()}
      </section>
    )
  }
}

export default BreweryContainer;
