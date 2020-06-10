import React from "react";
import styled from "styled-components";
import {darkTheme} from "../../theme/globalStyle";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const {
  background,
  textColorWhite,
  accent
} = darkTheme;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 15%;
  background-color: ${background};

  h1 {
    font-family: 'Righteous', cursive;
    font-size: 2.3em;
    margin-left: 2%;
    border-bottom: 2px solid ${accent};
    width: 100%;
  }
`
const TopStyled = styled.section`
  width: 100%;
  height: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;

`
const BottomStyled = styled.section`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;

`
const NavLinkStyled = styled(Link)`
  width: 20%;
  text-align: center;
  text-decoration: none;
  color: ${textColorWhite};
    &:focus {
      border-left: 1px solid ${accent};
      border-right: 1px solid ${accent};
      color: ${accent};
    }
`
const NavBar = (props) => {

  return (
    <Wrapper>
      <TopStyled>
        <h1>Brew Finder</h1>
      </TopStyled>
      <BottomStyled>
        <NavLinkStyled onClick={props.resetSearch} to="/">Home</NavLinkStyled>
        <NavLinkStyled to="/favorites">Favorites</NavLinkStyled>
        <NavLinkStyled to="/to-visit">Pubs to Visit</NavLinkStyled>
      </BottomStyled>
    </Wrapper>
  )
}

NavBar.propTypes = {
  resetSearch: PropTypes.func
};

export default NavBar;
