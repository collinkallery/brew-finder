import React from "react";
import styled from "styled-components";
import {GlobalStyle, darkTheme} from "../../theme/globalStyle";
import Brewery from '../Brewery/Brewery';
import BreweryToVisit from '../BreweryToVisit/BreweryToVisit';
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

const ToVisitWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 4%;
`

const ToVisitContainer = (props) => {
  const visitsToDisplay = () => {
    const visits = props.toVisit.map(pubToVisit => {
      return (
        <BreweryToVisit
          pub={pubToVisit}
          key={pubToVisit.id}
          setFavorites={props.setFavorites}
          favorites={props.favorites}
          toVisit={props.toVisit}
          setToVisits={props.setToVisits}
        />
      )
    })
    return visits;
  }
  return (
    <Wrapper>
      <h2>Pubs to Visit</h2>
      <ToVisitWrapper>
        {props.toVisit.length === 0 ?
          <h3>You don't have any upcoming visits yet!</h3> :
          visitsToDisplay()
        }
      </ToVisitWrapper>
    </Wrapper>
  )
}

ToVisitContainer.propTypes = {
  favorites: PropTypes.array,
  setFavorites: PropTypes.func,
  toVisit: PropTypes.array,
  setToVisits: PropTypes.func
};

export default ToVisitContainer;
