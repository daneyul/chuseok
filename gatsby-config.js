const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Chuseok 2019`,
    description: `Celebrate and learn about the Korean Harvest Festival.`,
    author: `Daniel Nguyen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:`pages`,
        path: `${__dirname}/src/pages`,
      },
    },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name:`images`,
          path: `${__dirname}/src/images`,
        },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/chuseok-icon.png`, // This path is relative to the root of the site.
      },
    },


  ]
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
}
