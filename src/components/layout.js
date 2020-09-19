import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"
import Eurostile from "../fonts/eurostile.woff"
import Header from "./header"
import Footer from "./footer"
import { mediaQueries } from "./utils/mediaQueries"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Eurostile";
    src: url(${Eurostile}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;

    ${mediaQueries("md")`
      font-size: 50%;
    `};
    ${mediaQueries("lg")`
      font-size: 56.25%;
    `};
   ${mediaQueries("xl")`
    font-size: 75%;
  `};
    
  }
  body {
    font-family: "Eurostile", sans-serif;
    font-weight: 400;
    line-height: 1.6;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
