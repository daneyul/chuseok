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
      <SEO title="2019"  keywords={[`chuseok`, `chuseok 2019`, `chuseok korea`, `what is chuseok`, `chuseok holiday`, `chuseok info`, `chuseok foods`, `chuseok drinks`, `chuseok traditions`, `korean holidays`, `chuseok greetings`, `charye`, `beolcho`, `songmyo`, `chuseok gifts`, `hanbok`, `korean folk games`, `chuseok shows`]} />
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
