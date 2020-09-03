import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Home from "../components/home"
import MainContent from "../components/mainContent"

const IndexPage = () => (
  <Layout>
    <SEO title="Modestas Rimkus" />
    <Home />
    <MainContent />
  </Layout>
)

export default IndexPage
