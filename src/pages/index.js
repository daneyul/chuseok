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
      <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
    </Helmet>
  </Layout>
)

export default IndexPage


