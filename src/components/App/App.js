import React, {Component} from "react";
import styled from "styled-components";
import BreweryContainer from '../BreweryContainer/BreweryContainer';
import NavBar from '../NavBar/NavBar';
import Search from '../Search/Search';
import {fetchByCity} from '../../apiCalls'
import {GlobalStyle, darkTheme} from "../../theme/globalStyle";

const {
  background,
  secondaryBackground,
  textColorGrey,
  textColorWhite,
  accent
} = darkTheme;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`

class App extends Component {
  constructor() {
    super();
    this.state = {
      pubsByCity: [],
      pubsByState: []
    }
  }

  componentDidMount = async => {
    fetchByCity('denver')
      .then(data => this.setState({pubsByCity: data}))
  }

  render() {
    return (
      <Wrapper>
        <GlobalStyle />
        <NavBar />
        <Search />
      </Wrapper>
    )
  }
}

export default App;
