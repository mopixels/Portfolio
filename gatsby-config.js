module.exports = {
  siteMetadata: {
    title: `Front-end developer`,
    description: `Modestas Rimkus personal website`,
    author: `Modestas Rimkus`,
    url: "https://modestasrimkus.netlify.app",
    image: "/src/data/images/mr.png",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Modestas Rimkus personal website`,
        short_name: `MoPixels portfolio`,
        start_url: `/`,
        background_color: `#520171`,
        theme_color: `#520171`,
        display: `minimal-ui`,
        icon: `src/data/images/mr.png`,
        cache_busting_mode: "none",
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -100,
      },
    },
  ],
}
