import React, {useState, useEffect} from "react";
import styled from "styled-components";
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
`

const ButtonWrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;

  button {
    width: 40%;
    background-color: ${secondaryBackground};
    font-size: .9em;
    border: 1px solid ${accent};
    color: ${textColorWhite};
    margin: 2%;
    padding: 2%;
    border-radius: 5px;
    font-family: 'Barlow Condensed', sans-serif;
  }
`

const Brewery = (props) => {

  const handleFavorites = () => {
    if (props.favorites.length > 0) {
      props.favorites.forEach(favorite => {
        if (favorite.id === props.pub.id) {
          props.setFavorites(props.pub);
        } else {
          props.setFavorites(props.pub);
        }
      })
    } else {
      props.setFavorites(props.pub);
    }
  }

  const checkFavorites = () => {
    if (props.favorites.length > 0) {
      props.favorites.find(favorite => {
        return favorite.id === props.pub.id
      })
      // props.favorites.forEach(favorite => {
      //   if (favorite.id === props.pub.id) {
      //     return false;
      //   } else {
      //     return true;
      //   }
      // })
    } else {
      return true;
    }
  }

  const handleVisits = () => {
    if (props.toVisit.length > 0) {
      props.toVisit.forEach(pub => {
        if (pub.id == props.pub.id) {
          props.setToVisits(props.pub);
        } else {
          props.setToVisits(props.pub);
        }
      })
    } else {
      props.setToVisits(props.pub);
    }
  }

  const checkVisits = () => {
    if (props.toVisit.length > 0) {
      props.toVisit.forEach(pub => {
        if (pub.id == props.pub.id) {
          return false;
        } else {
          return true;
        }
      })
    } else {
      return true;
    }
  }

  return (
    <Wrapper>
      <h3>{props.pub.name}</h3>
      <section>
        <p>Brewery Type: {props.pub.brewery_type}</p>
        <p>Address: {props.pub.street}</p>
        <p>{props.pub.city}, {props.pub.state}</p>
        <p>Phone Number: {props.pub.phone}</p>
      </section>
      <ButtonWrapper>
        <button
          onClick={handleFavorites}>
          {checkFavorites() ? 'Favorite this Brewery' : 'Remove from Favorites'}
        </button>
        <button
          onClick={handleVisits}>
          {checkVisits() ? 'Add to Visit List' : 'Remove from Visits'}
        </button>
      </ButtonWrapper>
    </Wrapper>
  )
}

export default Brewery;
