import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"
import ProjectModal from "./ProjectModal"

const StyledProject = styled.div`
  background: #faf9f9;
  position: relative;
  border-radius: 1rem;
  transition: 0.5s ease;

  .image {
    opacity: 1;
    display: block;
    backface-visibility: hidden;
    border-radius: 1rem;
    transition: 0.5s ease;
    background-size: contain;
  }

  .text {
    transition: 0.5s ease;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding: 0rem 2rem;
    text-align: center;

    p {
      font-size: 2rem;
      font-weight: 700;
      padding-bottom: 1.5rem;
    }
  }
  &:focus,
  &:hover {
    .image {
      filter: blur(3px);
      opacity: 0.2;
    }
    .text {
      opacity: 1;
    }
  }
`

const Project = ({ portfolio }) => {
  const { image, text } = portfolio.frontmatter
  return (
    <StyledProject>
      <Img fluid={image.childImageSharp.fluid} className="image" />
      <div className="text">
        <p>{text}</p>
        <ProjectModal portfolio={portfolio} />
      </div>
    </StyledProject>
  )
}

export default Project
