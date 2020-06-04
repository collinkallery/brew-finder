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

const NavBar = () => {

  const Wrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 10%;
    background-color: ${background};

    h1 {
      font-family: 'Righteous', cursive;
      font-size: 2.7em;
      margin-left: 2%;
      border-bottom: 2px solid ${accent};
      width: 100%;
    }
  `

  return (
    <Wrapper>
      <h1>Brew Finder</h1>
    </Wrapper>
  )
}

export default NavBar;
