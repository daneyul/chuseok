import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/nav.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'hamburgers/dist/hamburgers.css'
import "../styles/custom.scss"



const IndexPage = () => (
  <Layout>
    <SEO title="Chuseok 2019" keywords={[`gatsby`, `application`, `react`]} />
  </Layout>
)

export default IndexPage



