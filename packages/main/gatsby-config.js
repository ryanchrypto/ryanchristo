module.exports = {
  siteMetadata: {
    title: 'Ryan Christoffersen',
    description: 'Software Developer',
    keywords: 'Software Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'ryanchristo',
        short_name: 'ryanchristo',
        icon: './src/assets/img/logo.png',
      },
    },
  ],
}
