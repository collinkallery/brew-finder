import React from "react";
import styled from "styled-components";

const Brewery = (props) => {

  return (
    <section>
      <h2>{props.name}</h2>
      <section>
        <p>{props.street}</p>
        <p>{props.city}, {props.state}</p>
        <p>{props.phone}</p>
      </section>
    </section>
  )
}

export default Brewery;
