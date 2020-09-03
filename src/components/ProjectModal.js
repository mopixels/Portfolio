import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import styled from "styled-components"
import Modal from "react-modal"
import Img from "gatsby-image"
import Button from "./Button"

import { FaChevronRight, FaGithub } from "react-icons/fa"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "transparent",
    border: "none",
    overflow: "visible",
    maxWidth: "80vw",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
}

const StyledContent = styled.div`
  display: flex;
  max-width: 80vw;

  .closeButton {
    position: fixed;
    top: 0;
    right: 0;

    cursor: pointer;
    &:hover {
      color: #520171;
    }
  }
  .imageContainer {
    position: relative;

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

    h2 {
      font-size: 3.5rem;
      text-align: center;
      padding-bottom: 0.5rem;
    }
    .descriptionText {
      font-size: 1.8rem;
      padding-bottom: 2rem;
    }
    .toolsContainer {
      padding-bottom: 5rem;
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

      .button {
        width: 40%;
        background: #520171;
        color: white;

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
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      phoneImage: file(relativePath: { eq: "images/phone.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
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
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#000"
  }

  function closeModal() {
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
