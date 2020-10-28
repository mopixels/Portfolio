import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import Layout from "../sections/layout";
import SEO from "../components/seo";

const NotFoundPage = () => {
  const Styled404 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75vh;
    overflow: hidden;
    .yoda404 {
      width: 40rem;
    }
  `;

  const image404 = useStaticQuery(graphql`
    query {
      personImage: file(relativePath: { eq: "images/404-yoda.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Styled404>
        <SEO title='Page not found' />
        <Img
          fluid={image404.personImage.childImageSharp.fluid}
          alt='404 Page not found'
          className='yoda404'
        />
      </Styled404>
    </Layout>
  );
};

export default NotFoundPage;
