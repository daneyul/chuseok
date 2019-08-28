const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Chuseok 2019`,
    description: `Celebrate and learn about the foods, traditions, and festivities of one of Korea's most important holidays, Chuseok.`,
    author: `Daniel Nguyen`,
    siteUrl: `https://www.chuseok.info`,
    image: `${__dirname}/src/images/meta-thumbnail.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-yaml`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
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
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 1000,
            },
          },
          {
            resolve: "gatsby-remark-component",
            options: { plugins: ["gatsby-remark-component"] }
          },
        ],
      },
    },
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
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.chuseok.info',
        sitemap: 'https://www.chuseok.info/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }


  ]
    
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
}
