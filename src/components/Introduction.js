import React from "react"
import styled from "styled-components"

const HelloText = styled.div`
  grid-column: 1 / 1;
  grid-row: 1 / 1;
  margin: 8rem 0 0 8rem;
  font-size: 3rem;
  h1 {
    font-weight: 800;
  }
`

const Introduction = () => (
  <HelloText>
    <h1>Hey, my name is Modestas</h1>
    <p>I'm a Front-end developer from Vilnius, Lithuania</p>
  </HelloText>
)

export default Introduction
