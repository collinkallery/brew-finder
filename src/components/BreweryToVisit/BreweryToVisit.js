import React, {Component} from "react";
import styled from "styled-components";
import {GlobalStyle, darkTheme} from "../../theme/globalStyle";
import {Route} from "react-router-dom";
import RatingCard from '../RatingCard/RatingCard';
import PropTypes from "prop-types";

const {
  background,
  secondaryBackground,
  textColorGrey,
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
  button {
    width: 40%;
    background-color: ${secondaryBackground};
    font-size: .9em;
    border: 1px solid ${accent};
    color: ${textColorWhite};
    margin-left: 60%;
    padding: 2%;
    border-radius: 5px;
    font-family: 'Barlow Condensed', sans-serif;
  }
`
const VisitWrapper = styled.section`
  width: 100%;
  margin: auto;
`

class BreweryToVisit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasVisited: false,
      rating: null,
      hasRatedYet: false
    }
  }

  updateVisitStatus = () => {
    this.setState({
      hasVisited: true
    })
  }

  showRatingCard = () => {
    if (this.state.hasVisited === true) {
      return (
        <RatingCard
          pub={this.props.pub}
          setRating={this.setRating}
          hasRatedYet={this.state.hasRatedYet}
        />
      )
    } else {
      return
    }
  }

  setRating = (id) => {
    this.setState({
      rating: id,
      hasRatedYet: true
    })
  }

  render() {
    return (
      <Wrapper>
        <h3>{this.props.pub.name}</h3>
        <section>
          <p>Brewery Type: {this.props.pub.brewery_type}</p>
          <p>Address: {this.props.pub.street}</p>
          <p>{this.props.pub.city}, {this.props.pub.state}</p>
          <p>Phone Number: {this.props.pub.phone}</p>
          <p>Your Rating: {this.state.rating}</p>
        </section>
        <VisitWrapper>
          {!this.state.hasVisited ?
            <button onClick={() => this.updateVisitStatus()}>Add to Visits</button> :
            this.showRatingCard()
          }
        </VisitWrapper>
      </Wrapper>
    )
  }
}

BreweryToVisit.propTypes = {
  pub: PropTypes.object,
  setFavorites: PropTypes.func,
  favorites: PropTypes.array,
  setToVisits: PropTypes.func,
  toVisit: PropTypes.array
};

export default BreweryToVisit;
