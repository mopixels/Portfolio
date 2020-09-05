import React from "react"
import styled from "styled-components"
import { mediaQueries } from "./utils/mediaQueries"

const HelloText = styled.div`
  grid-column: 1 / 3;
  grid-row: 1 / 1;
  margin: 8rem 0 0 8rem;
  font-size: 3rem;
  ${mediaQueries("lg")`
    font-size: 2.8rem;
  `};
  ${mediaQueries("sm")`
  margin: 4rem 2rem 0 4rem;
  font-size: 2rem;
  `};
  h1 {
    font-weight: 800;
  }
  p {
  }
`

const Introduction = () => (
  <HelloText>
    <h1>Hey, my name is Modestas</h1>
    <p>I'm a Front-end developer from Vilnius, Lithuania</p>
  </HelloText>
)

export default Introduction
