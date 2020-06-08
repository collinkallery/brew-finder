import React, {Component} from "react";
import styled from "styled-components";
import {GlobalStyle, darkTheme} from "../../theme/globalStyle";
import {Link} from "react-router-dom";

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
  height: 85%;
  background-image: url('https://images.unsplash.com/photo-1536638317175-32449deccfc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
  background-size: cover;
  background-position: center;

  form { 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 55%;
    margin: auto;
    background-color: ${background};
    opacity: 85%;
    border: 2px solid ${accent};
    border-radius: 5px;
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
    font-size: 1.2em;
  }
  button {
    background-color: ${secondaryBackground};
    color: ${textColorWhite};
    width: 100%;
    font-size: 1em;
    text-align: center;
    border: none;
  }
`

const HomeLink = styled(Link)`
  background-color: ${secondaryBackground};
  border: 1px solid ${accent};
  width: 30%;
  margin: 3%;
  padding: 3%;
  border-radius: 5px;
  text-decoration: none;
  text-align: center;
`

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationType: '',
      location: '',
    }
  }

  trackType = (e) => {
    let type = e.target.options[e.target.selectedIndex].value;
    this.setState({locationType: type});
  }

  trackInput = (e) => {
    this.setState({location: e.target.value})
  }

  handleSubmit = (e) => {
    this.props.setSearch(this.state);
  }

  render() {
    return (
      <Wrapper>
        <form>
          <p>Lover of all things beer? Welcome to Brew Finder! Throw in your
          city, state, or zipcode to see some of the most popular breweries
          in your location!</p>
          <select required onChange={this.trackType} id="type">
            <option value="">Pick Location Type</option>
            <option value="City">City</option>
            <option value="State">State</option>
            <option value="Zip Code">Zip Code</option>
          </select>
          <input
            type="text"
            name="location"
            id="location"
            placeholder="Location by city, state, or zip code"
            required
            onChange={this.trackInput}
          />
          <HomeLink to={`/breweries/${this.state.location}`}>
            <button onClick={() => this.handleSubmit()}>Let's Go!</button>
          </HomeLink>
        </form>
      </Wrapper>
    )
  }
}

export default Search;
