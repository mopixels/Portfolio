import React from "react"
import Introduction from "./Introduction"
import Person from "./person"
import Wave from "./wave"
import styled from "styled-components"

const HomeSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 0;
  height: 85vh;
  overflow: hidden;
  background: radial-gradient(
    ellipse at center,
    rgba(255, 254, 234, 1) 0%,
    rgba(255, 254, 234, 1) 35%,
    #b7e8eb 100%
  );
`
const Home = () => (
  <HomeSection id="home">
    <Introduction />
    <Person />
    <Wave />
  </HomeSection>
)

export default Home
