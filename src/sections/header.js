import React from "react";
import styled from "styled-components";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { FaUser, FaFileCode, FaPhone } from "react-icons/fa";
import { mediaQueries } from "../components/utils/mediaQueries";

const StyledHeader = styled.header`
  background: #520171;
`;

const NavStyles = styled.ul`
  display: flex;
  justify-content: flex-end;
  margin: 0;
  padding: 0.6rem 1rem;
  list-style: none;
  ${mediaQueries("sm")`
    justify-content: center;
    padding: 0.8rem;
  `};
  li {
    margin: 0;
    padding: 0 1rem;
    ${mediaQueries("sm")`
      padding: 0;
    `};
    a {
      font-size: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.125rem;
      color: white;
      text-decoration: none;
      opacity: 1;
      position: relative;
      display: inline-block;
      transition: 0.3s;
      ${mediaQueries("sm")`
        font-size: 2.2rem;
        padding: 0 1rem;
      `};

      span {
        position: relative;
        display: inline-block;
        transition: 0.3s;
      }
      .hiddenIcon {
        position: absolute;
        opacity: 0;
        top: 10%;
        left: 35%;
      }

      &:hover,
      &:active {
        .end {
          transform: translate(-15px, 0px) rotateY(0.5turn);
          opacity: 0;
        }
        .start {
          transition-delay: 0.15s;
          transform: translate(15px, 0px) rotateY(0.5turn);
          opacity: 0;
        }
        .middle {
          transition-delay: 0.25s;
          opacity: 0;
        }
        .hiddenIcon {
          transition-delay: 0.28s;
          opacity: 1;
        }
      }
    }
  }
`;

const Header = () => (
  <StyledHeader>
    <NavStyles>
      <li>
        <AnchorLink to='/#about' stripHash>
          <span className='start'>Ab</span>
          <span className='middle'>o</span>
          <span className='end'>ut</span>
          <div className='hiddenIcon hiddenIcon-about'>
            <FaUser />
          </div>
        </AnchorLink>
      </li>
      <li>
        <AnchorLink to='/#projects' stripHash>
          <span className='start'>Pro</span>
          <span className='middle'>je</span>
          <span className='end'>cts</span>
          <div className='hiddenIcon hiddenIcon-projects'>
            <FaFileCode />
          </div>
        </AnchorLink>
      </li>
      <li>
        <AnchorLink to='/#contact' stripHash>
          <span className='start'>Con</span>
          <span className='middle'>ta</span>
          <span className='end'>ct</span>
          <div className='hiddenIcon hiddenIcon-contact'>
            <FaPhone />
          </div>
        </AnchorLink>
      </li>
    </NavStyles>
  </StyledHeader>
);

export default Header;
