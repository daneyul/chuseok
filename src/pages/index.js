import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/nav.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'hamburgers/dist/hamburgers.css'
import "../styles/custom.scss"



const IndexPage = () => (
  <Layout>
    <SEO title="Chuseok 2019" keywords={[`chuseok`, `chuseok info`, `chuseok foods`, `chuseok drinks`, `chuseok traditions`, `korean holidays`, `chuseok greetings`, `charye`, `beolcho`, `songmyo`, `chuseok gifts`, `hanbok`, `korean folk games`, `chuseok shows`]} />
  </Layout>
)

export default IndexPage



