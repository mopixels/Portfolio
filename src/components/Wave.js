import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"
import styled, { keyframes } from "styled-components"
import { FaChevronDown } from "react-icons/fa"
import waveImage from "../data/images/waveImage.png"

const waveAnimation = keyframes`
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -1600px;
    }
`

const swellAnimation = keyframes`
    0%,
    100% {
      transform: translate3d(0, -10px, 0);
    }
    50% {
      transform: translate3d(0, 5px, 0);
    }
`

const StyledContainer = styled.div`
  position: relative;
  height: 100%;
  align-self: end;
  grid-column: 1 / 3;
  grid-row: 1 / 2;

  .ocean {
    height: 10%;
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    background: #015871;
  }

  .wave {
    background: url(${waveImage}) repeat-x;
    position: absolute;
    top: -65px;
    width: 6400px;
    height: 120px;
    animation: ${waveAnimation} 10s cubic-bezier(0.36, 0.45, 0.63, 0.53)
      infinite;
    transform: translate3d(0, 0, 0);
  }

  .wave:nth-of-type(2) {
    top: -58px;
    animation: ${waveAnimation} 10s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s
        infinite,
      ${swellAnimation} 7s ease -1.25s infinite;
    opacity: 1;
  }
`

const Wave = () => (
  <StyledContainer>
    <div className="ocean">
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
    <AnchorLink to="/#about" stripHash>
      <FaChevronDown
        size={24}
        color="grey"
        style={{ position: "absolute", bottom: 0, left: "50%" }}
      />
    </AnchorLink>
  </StyledContainer>
)

export default Wave
