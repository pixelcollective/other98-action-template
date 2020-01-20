const config = require('./config')

module.exports = {
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    title: config.title,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-manifest`,
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
  ],
};
