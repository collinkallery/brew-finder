import React from "react";
import styled from "styled-components";
import {GlobalStyle, darkTheme} from "../../theme/globalStyle";

const {
  background,
  secondaryBackground,
  textColorGrey,
  textColorWhite,
  accent
} = darkTheme;

const Search = () => {

  const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    height: 90%;
    background-image: url('https://images.unsplash.com/photo-1536638317175-32449deccfc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
    background-size: cover;
    background-position: center;

    form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 80%;
      height: 40%;
      margin: auto;
      background-color: ${background};
      opacity: 85%;
      border: 2px solid ${accent};
    }
    select,
    input {
      background-color: ${secondaryBackground};
      color: ${textColorWhite};
      border: 1px solid ${accent};
      width: 70%;
      margin: 3%;
      padding: 3%;
      font-size: 1em;
      border-radius: 5px;
    }
    p {
      padding: 2% 15%;
      color: ${textColorWhite};
      text-align: center;
    }
  `

  return (
    <Wrapper>
      <form>
        <p>Lover of all things beer? Welcome to Brew Finder! Throw in your
        city, state, or zipcode to see some of the most popular breweries
        in your location!</p>
        <select>
          <option value="''">Pick Location Type</option>
          <option value="City">City</option>
          <option value="State">State</option>
          <option value="Zip Code">Zip Code</option>
        </select>
        <input
          type="text"
          name="location"
          id="location"
          placeholder="Location by city, state, or zip code"
        />
      </form>
    </Wrapper>
  )
}

export default Search;
