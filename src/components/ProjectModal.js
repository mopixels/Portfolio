import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Modal from "react-modal"
import Img from "gatsby-image"
import { FaChevronRight, FaGithub, FaTimes } from "react-icons/fa"
import styled from "styled-components"
import Button from "./utils/Button"
import { mediaQueries } from "./utils/mediaQueries"

const customStyles = {
  content: {
    border: "none",
    background: "transparent",
    overflow: "visible",
    borderRadius: "0",
    padding: 0,
    height: "max-content",
    width: "max-content",
    margin: "auto auto",
    top: "2rem",
    left: "2rem",
    right: "2rem",
    bottom: "2rem",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    zIndex: 2,
  },
}

const StyledContent = styled.div`
  display: flex;
  justify-content: center;
  ${mediaQueries("md")`
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `};

  .closeButton {
    opacity: 1;
    position: fixed;
    top: 2rem;
    right: 2rem;
    cursor: pointer;
    &:hover {
      color: #520171;
    }
  }
  .imageContainer {
    position: relative;
    align-self: center;
    ${mediaQueries("md")`
      padding-bottom: 1rem;
      align-self: center;
    `};

    .laptopImage {
      object-fit: contain;
      width: 45vw;
      align-self: flex-start;
      z-index: 1;
    }
    .phoneImage {
      object-fit: contain;
      width: 17vw;
      align-self: flex-start;
      z-index: 1;
      margin-right: 3rem;
      ${mediaQueries("md")`
        margin-right: 0;
      `};
    }
    .websiteImage {
      position: absolute;
      top: 4.8%;
      left: 15%;
      width: 70%;
    }
    .appImage {
      position: absolute;
      top: 2.7%;
      left: 3%;
      width: 15.9vw;
      border-radius: 5%;
    }
  }
  .descriptionContainer {
    max-width: 40vw;
    padding-left: 1rem;
    align-self: center;

    ${mediaQueries("md")`
      min-width: 80vw;
      padding-left: 0;
    `};

    h2 {
      font-size: 3.5rem;
      text-align: center;
      padding-bottom: 0.5rem;
    }
    .descriptionText {
      font-size: 1.8rem;
      padding-bottom: 2rem;
      ${mediaQueries("md")`
        text-align: justify;
      `};
    }
    .toolsContainer {
      padding-bottom: 5rem;
      ${mediaQueries("md")`
        padding-bottom: 2.5rem;
      `};
    }
    h3 {
      font-size: 2rem;
    }
    .toolsList {
      font-size: 1.8rem;
      font-weight: bold;
      color: #520171;
      text-transform: uppercase;
    }
    .linkButtons {
      display: flex;
      justify-content: center;
      align-items: center;
      column-gap: 2rem;

      .button {
        background: #520171;
        color: white;

        ${mediaQueries("md")`
          max-width: 40%;
        `};
        ${mediaQueries("sm")`
          min-width: max-content;
        `};

        .sourceIcon {
          margin-right: 1rem;
          vertical-align: text-bottom;
        }
      }
      a {
        color: inherit;
        text-decoration: none;
      }
    }
  }
`

Modal.setAppElement("#___gatsby")

function ProjectModal({ portfolio }) {
  const project = portfolio.frontmatter
  const data = useStaticQuery(graphql`
    query {
      laptopImage: file(relativePath: { eq: "images/laptop.png" }) {
        childImageSharp {
          fluid(maxWidth: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      phoneImage: file(relativePath: { eq: "images/phone.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  var subtitle
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    document.documentElement.style.overflow = "hidden"
    document.body.scroll = "no"
    subtitle.style.color = "#000"
  }

  function closeModal() {
    document.documentElement.style.overflow = "scroll"
    document.body.scroll = "yes"
    setIsOpen(false)
  }

  return (
    <div>
      <Button onClick={openModal}>
        <span>More</span>
        <FaChevronRight style={{ marginLeft: ".5rem" }} />
      </Button>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel={project.title}
      >
        <StyledContent>
          <div className="closeButton">
            <FaTimes size={24} onClick={closeModal} />
          </div>
          {project.type === "App" ? (
            <div className="imageContainer">
              <Img
                fluid={data.phoneImage.childImageSharp.fluid}
                className="phoneImage"
              />
              <Img
                fluid={project.imageSecond.childImageSharp.fluid}
                className="appImage"
                style={{ position: "absolute" }}
              />
            </div>
          ) : (
            <div className="imageContainer">
              <Img
                fluid={data.laptopImage.childImageSharp.fluid}
                className="laptopImage"
              />
              <Img
                fluid={
                  project.imageSecond === null
                    ? project.image.childImageSharp.fluid
                    : project.imageSecond.childImageSharp.fluid
                }
                className="websiteImage"
                style={{ position: "absolute" }}
              />
            </div>
          )}

          <div className="descriptionContainer">
            <h2 ref={_subtitle => (subtitle = _subtitle)}>{project.title}</h2>
            <p
              className="descriptionText"
              dangerouslySetInnerHTML={{ __html: portfolio.html }}
            />
            <div className="toolsContainer">
              <h3>DEVELOPMENT TOOLS</h3>
              <p className="toolsList">{project.usedTools}</p>
            </div>
            <div className="linkButtons">
              <Button className="button">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.type === "Website"
                    ? "Visit website"
                    : "Open Google Play"}
                </a>
              </Button>
              <Button className="button">
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub size={20} className="sourceIcon" />
                  Source
                </a>
              </Button>
            </div>
          </div>
        </StyledContent>
      </Modal>
    </div>
  )
}

export default ProjectModal
