import React from "react"
import styled from "styled-components"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import { FaChevronCircleUp } from "react-icons/fa"
import Introduction from "./Introduction"
import Person from "./person"
import Wave from "./Wave"
import { mediaQueries } from "./utils/mediaQueries"

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
  ${mediaQueries("sm")`
    height: 75vh;
  `};
`
const LinkHome = styled.div`
  height: 0;
  a {
    color: white;
    text-decoration: none;
    opacity: 1;
    position: relative;
    display: inline-block;
    transition: 0.3s;
    .arrowUp {
      position: fixed;
      bottom: 2rem;
      right: 2rem;
      z-index: 2;
    }
  }
`

const Home = () => (
  <>
    <HomeSection id="home">
      <Introduction />
      <Person />
      <Wave />
    </HomeSection>
    <LinkHome>
      <AnchorLink to="/#home" stripHash>
        <FaChevronCircleUp size={24} className="arrowUp" />
      </AnchorLink>
    </LinkHome>
  </>
)

export default Home
