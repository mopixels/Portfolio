import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { createGlobalStyle } from "styled-components"

import Header from "./header"
import Footer from "./footer"
import Eurostile from "../fonts/eurostile.woff"

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "Eurostile";
    src: url(${Eurostile}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  * {
    margin: 0;
    padding: 0;
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  html {
    box-sizing: border-box;
    font-size: 62.5%;
    /* 1rem = 10px, 10px/16px = 62.5% */
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

// if (typeof window !== "undefined") {
//   require("smooth-scroll")('a[href*="#"]')
// }

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
