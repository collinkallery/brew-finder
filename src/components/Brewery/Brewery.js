import React from "react";
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
  width: 80%;
  border: 1px solid ${secondaryBackground};
  margin: 2%;
  padding: 2%;

  h3 {
    font-size: 1.8em;
  }
`

const MapWrapper = styled.section`
  width: 90%;
`

const Brewery = (props) => {

  return (
    <Wrapper>
      <h3>{props.name}</h3>
      <section>
        <p>Brewery Type: {props.brewery_type}</p>
        <p>Address: {props.street}</p>
        <p>{props.city}, {props.state}</p>
        <p>Phone Number: {props.phone}</p>
      </section>
      <MapWrapper>

      </MapWrapper>
    </Wrapper>
  )
}

export default Brewery;
