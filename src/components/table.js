import React from "react";
import "../styles/landing.scss";
import "../styles/images.scss";
import table from "../images/landing/table.svg"
import { a, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const TableMedia= () => (
    <StaticQuery
    query={graphql`
    query {
        miscOne: file(relativePath: { eq: "landing/table-thumb.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        miscTwo: file(relativePath: { eq: "landing/media-thumb.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    `}

    render ={data => (
        
    <React.Fragment>
        <a href="/table" onClick="window.location.reload();" class="misc-image">
          <Img fluid={data.miscOne.childImageSharp.fluid} />
          <h2 class="landing-category landing-category__fest">Tradition</h2>
          <h3 class="landing-header__two">Table Setting</h3>
          <p>Did you know that food is traditionally laid out a certain way? Here are some guidelines to placing food on the table for Charye, although it isn't so crucial these days.</p>
        </a>
        <a href="/foods" onClick="window.location.reload();" class="misc-image">
          <Img fluid={data.miscTwo.childImageSharp.fluid} />
          <h2 class="landing-category landing-category__fest">Tradition</h2>
          <h3 class="landing-header__two">TV & Movies</h3>
          <p>Television broadcast schedules are some of the most searched terms during Chuseok. Movies, TV dramas, and variety shows play all throughout the holiday - watching TV has become an informal Chuseok event in itself.</p>
        </a>
    </React.Fragment>

    )}

    />
)

export default TableMedia
