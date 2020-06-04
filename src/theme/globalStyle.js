import {createGlobalStyle} from "styled-components";

export const darkTheme = {
  background: '#202124',
  secondaryBackground: '#3C4042',
  textColorGrey: '#606368',
  textColorWhite: '#FFFFFF',
  accent: '#EA80FC'
}

export const GlobalStyle = createGlobalStyle`

  *,
  *:after,
  *:before {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html,
  #root {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: white;
    width: 100%;
    height: 100%;
    color: #606368;
    background-color: #202124;
    font-family: 'Barlow Condensed', sans-serif;
  }

  #blockColorblindContent {
    display: none;
  }
`;
