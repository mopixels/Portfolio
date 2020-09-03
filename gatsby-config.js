module.exports = {
  siteMetadata: {
    title: `Front-end developer`,
    description: `Modestas Rimkus personal website`,
    author: `Modestas Rimkus`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Modestas Rimkus personal website`,
        short_name: `MoPixels portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/data/images/mr.png`,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -90,
      },
    },
  ],
}
