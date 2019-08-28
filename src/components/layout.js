/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import SEO from "../components/seo"
import Nav from "./nav"
import Landing from "./landing"
import Footer from "./footer"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>

        <title>Chuseok 2019 - Korean Thanksgiving</title>
        <meta name="title" content="Chuseok 2019 - Korean Thanksgiving"/>
        <meta name="description" content="Celebrate and learn about the foods, traditions, and festivities of one of Korea's most important holidays, Chuseok."/>


        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://www.chuseok.info/"/>
        <meta property="og:title" content="Chuseok 2019 - Korean Thanksgiving"/>
        <meta property="og:description" content="Celebrate and learn about the foods, traditions, and festivities of one of Korea's most important holidays, Chuseok."/>
        <meta property="og:image" content="/opt/build/repo/src/images/meta-thumbnail.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://www.chuseok.info/"/>
        <meta property="twitter:title" content="Chuseok 2019 - Korean Thanksgiving"/>
        <meta property="twitter:description" content="Celebrate and learn about the foods, traditions, and festivities of one of Korea's most important holidays, Chuseok."/>
        <meta property="twitter:image" content="/opt/build/repo/src/images/meta-thumbnail.png"/>
        <Nav />
        <main>
          <Landing />
        </main>
        <Footer />

      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
