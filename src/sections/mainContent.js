import React from "react";
import Particles from "react-particles-js";
import AboutMe from "../components/aboutMe";
import Projects from "./projects";
import styled from "styled-components";

const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        speed: 1,
        size_min: 0.3,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 1,
      direction: "top",
      out_mode: "out",
    },
  },
};

const MainSection = styled.section`
  position: relative;
  background: linear-gradient(rgba(1, 88, 113, 1) 0%, rgba(0, 0, 0, 1) 100%);
  min-height: min-content;

  .particles {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const MainContent = () => (
  <MainSection>
    <Particles params={particlesOptions} className='particles' />
    <AboutMe />
    <Projects />
  </MainSection>
);

export default MainContent;
