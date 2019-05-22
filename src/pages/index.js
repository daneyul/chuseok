import React from "react"
import { Link } from "gatsby"
import {Helmet} from "react-helmet"

import Layout from "../components/layout"
import SEO from "../components/seo"

import 'bootstrap/dist/css/bootstrap.css'
import "../styles/custom.scss"



const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Helmet>
      <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css?family=Oswald" rel="stylesheet"></link>
    </Helmet>
  </Layout>
)

export default IndexPage
