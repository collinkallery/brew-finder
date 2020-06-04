import React from "react";
import styled from "styled-components";
import Brewery from '../Brewery/Brewery';

const BreweryContainer = (props) => {
  const pubsToDisplay = props.pubsByCity.map(pub => {
    return (
      <Brewery {...pub} />
    )
  })
  return (
    <section>
    {pubsToDisplay}
    </section>
  )
}

export default BreweryContainer;
