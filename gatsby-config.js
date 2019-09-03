module.exports = {
  siteMetadata: {
    title: `Ryan Christoffersen`,
    description: `Ryan Christoffersen`,
    author: `@ryanchristo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ryan Christoffersen`,
        short_name: `Ryan Christoffersen`,
        icon: `static/img/logo.png`,
      },
    },
  ],
}
