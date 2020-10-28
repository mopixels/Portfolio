import React from "react";
import styled from "styled-components";
import { SiGatsby } from "react-icons/si";
import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaEnvelopeSquare,
} from "react-icons/fa";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 1) 0%, rgba(82, 1, 113, 1) 100%);
  padding: 12rem 5rem 7rem 5rem;
  color: white;

  .inviteText {
    padding-bottom: 2rem;
    h3 {
      font-size: 4rem;
    }
    p {
      font-size: 1.8rem;
    }
  }
  .emailContainer {
    p {
      font-weight: 700;
      letter-spacing: 0.1rem;
      font-size: 1.8rem;
    }
  }
  .socialMedia {
    ul {
      display: flex;
      flex-direction: row;
      list-style: none;

      li {
        align-self: center;
        margin: 1rem;
        transition: all 0.4s;
        a {
          display: inline-block;
          color: white;
          .socialIcon {
            vertical-align: bottom;
          }
        }
        &:hover {
          box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.4);
          transform: translateY(-1.05rem) scale(1.1);
        }
        &:active {
          transform: translateY(0px);
        }
      }
    }
  }
  .copyrights {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding-top: 5rem;
    font-size: 1.4rem;
    .gatsby {
      padding-top: 1rem;
      span {
        vertical-align: middle;
      }
      a {
        vertical-align: middle;
        padding-left: 0.8rem;
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className='inviteText' id='contact'>
        <h3>Get in touch</h3>
        <p>Say Hi or find me at:</p>
      </div>
      <div className='emailContainer'>
        <p>mr.modestasrimkus@gmail.com</p>
      </div>
      <div className='socialMedia'>
        <ul>
          <li>
            <a
              href='https://www.linkedin.com/in/modestas-rimkus/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaLinkedin size={42} className='socialIcon' />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/mopixels'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaGithubSquare size={42} className='socialIcon' />
            </a>
          </li>
          <li>
            <a
              href='https://www.instagram.com/mo.pixels/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <FaInstagramSquare size={42} className='socialIcon' />
            </a>
          </li>
          <li>
            <a href='mailto: mr.modestasrimkus@gmail.com'>
              <FaEnvelopeSquare size={42} className='socialIcon' />
            </a>
          </li>
        </ul>
      </div>
      <div className='copyrights'>
        <span>Handmade by Modestas Rimkus © {new Date().getFullYear()}</span>
        <div className='gatsby'>
          <span>Built with</span>
          <a
            href='https://www.gatsbyjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            <SiGatsby size={24} color='white' />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
