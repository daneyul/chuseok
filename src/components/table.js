import React from "react";
import "../styles/landing.scss";
import "../styles/images.scss";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const Tableimage = () => (
    <StaticQuery
    query={graphql`
    query {
        table: file(relativePath: { eq: "landing/table.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}

    render ={data => (

        <div class="table-image">
            <Img fluid={data.table.childImageSharp.fluid} />
        </div>

    )}

    />
)

export default Tableimage
