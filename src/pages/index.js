import React from "react";
import Layout from "../sections/layout";
import SEO from "../components/seo";
import Home from "../sections/home";
import MainContent from "../sections/mainContent";

const IndexPage = () => (
  <Layout>
    <SEO title='Modestas Rimkus' />
    <Home />
    <MainContent />
  </Layout>
);

export default IndexPage;
