import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

const AboutMeStyled = styled.div`
  padding: 20rem 15rem;
  position: relative;

  h2 {
    color: white;
    text-align: center;
    font-size: 3rem;
    padding-bottom: 4rem;
  }

  .aboutContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: center;
    padding: 1.5rem 2rem 1.5rem 2rem;
    background: #faf9f9;
    border-radius: 1rem;
    .aboutDescription {
      margin-bottom: 2rem;
      p {
        text-align: justify;
        font-size: 1.8rem;
      }
      .link {
        color: black;
        transition: all 0.3s;
        &:hover {
          color: #520171;
        }
      }
      .pdfLink {
        font-size: 1.8rem;
        color: black;
        &:hover {
          color: #520171;
        }
      }
    }

    .toolsContainer {
      h3 {
        font-size: 2.2rem;
        text-align: center;
        padding-bottom: 1rem;
      }
      .toolList {
        text-align: center;
        font-size: 2rem;
        font-weight: bold;
        color: #520171;
      }
    }
  }
`

const AboutMe = () => {
  const data = useStaticQuery(graphql`
    query {
      resume: file(relativePath: { eq: "resume.pdf" }) {
        publicURL
        size
        name
      }
    }
  `)
  return (
    <AboutMeStyled>
      <h2 id="about">About me</h2>
      <div className="aboutContainer">
        <div className="aboutDescription">
          <p>
            I'm a self-taught Front-end developer with one plus years of
            experience. My journey to web development began last year, I took{" "}
            {""}
            <a
              href="https://www.udemy.com/course/the-complete-web-developer-zero-to-mastery/"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Full-stack
            </a>
            {""} online courses at Udemy. I learnt all of the basics of
            Front-end development (HTML, CSS and JavaScript) and a few things
            about Back-end. After a few more advanced online courses (
            <a
              href="https://www.udemy.com/course/advanced-css-and-sass/"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Advanced CSS and Sass
            </a>
            ,{" "}
            <a
              href="https://advancedreact.com/"
              className="link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fullstack Advanced React & GraphQL
            </a>
            ), countless YouTube videos, many coding challenges, hours of
            podcasts I started building my own projects. Then I realised that
            building websites/apps on your own is really difficult and
            challenging, but at the same time it’s sooo rewarding. So I got
            consumed by web development and I saw no way back.
            <br />
            Currently I'm in the search of an entry-level position where I can
            enhance my skill set to be a hard-working asset to any team. I'm
            dedicated to learning additional technologies and coding languages.
          </p>
          <a
            href={data.resume.publicURL}
            target="_blank"
            rel="noopener noreferrer"
            className="pdfLink"
          >
            View resume (PDF {Math.floor(data.resume.size / 1000)} kB )
          </a>
        </div>
        <div className="toolsContainer">
          <h3>My toolset</h3>
          <div className="tools">
            <p className="toolList">
              HTML - CSS - SASS - STYLED COMPONENTS - JAVASCRIPT - REACT - REACT
              NATIVE - REDUX - GATSBY
            </p>
          </div>
        </div>
      </div>
    </AboutMeStyled>
  )
}

export default AboutMe
