import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

const StyledPerson = styled.div`
  margin-bottom: -2.5rem;
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  width: 70%;
  justify-self: end;
  align-self: end;
`

const Person = () => {
  const image = useStaticQuery(graphql`
    query {
      personImage: file(relativePath: { eq: "images/person.png" }) {
        childImageSharp {
          fluid(quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <StyledPerson>
      <Img fluid={image.personImage.childImageSharp.fluid} alt="Person" />
    </StyledPerson>
  )
}

export default Person
