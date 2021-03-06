import React from "react";
import styled from "styled-components";
import {darkTheme} from "../../theme/globalStyle";
import BreweryToVisit from '../BreweryToVisit/BreweryToVisit';
import PropTypes from "prop-types";

const {
  secondaryBackground,
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
  h4 {
    text-align: center;
    margin: auto;
    border-top: 1px solid ${accent};
    border-bottom: 1px solid ${accent};
    width: 90%;
    padding: 10%;
    font-size: 2.3em;
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
          favorites={props.favorites}
          toVisit={props.toVisit}
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
          <h4>You don't have any upcoming visits yet!</h4> :
          visitsToDisplay()
        }
      </ToVisitWrapper>
    </Wrapper>
  )
}

ToVisitContainer.propTypes = {
  favorites: PropTypes.array,
  toVisit: PropTypes.array,
  updateFavoritesAndVisits: PropTypes.func
};

export default ToVisitContainer;
