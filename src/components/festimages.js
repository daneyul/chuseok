import React from "react";
import "../styles/landing.scss";
import "../styles/images.scss";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const Festimages = () => (
    <StaticQuery
    query={graphql`
    query {
        festOne: file(relativePath: { eq: "landing/hanbok-thumb.png" }) {
          childImageSharp {
            fluid(maxWidth: 400) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        festTwo: file(relativePath: { eq: "landing/gift-thumb.png" }) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          festThree: file(relativePath: { eq: "landing/greet-thumb.png" }) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          },
          festFour: file(relativePath: { eq: "landing/activity-thumb.png" }) {
            childImageSharp {
              fluid(maxWidth: 400) {
                ...GatsbyImageSharpFluid
              }
            }
          }
      }
    `}

    render ={data => (
        
    <React.Fragment>
        <div class="fest-image fest-image--box">
            <Img fluid={data.festOne.childImageSharp.fluid} />
            <h3 class="fest-header">Wearing a Hanbok</h3>
        </div>
        <div class="fest-image fest-image--box">
            <Img fluid={data.festTwo.childImageSharp.fluid} />
            <h3 class="fest-header">Gift Sets</h3>
        </div>
        <div class="fest-image fest-image--box">
            <Img fluid={data.festThree.childImageSharp.fluid} />
            <h3 class="fest-header">How to Greet in Korean</h3>
        </div>
        <div class="fest-image fest-image--box">
            <Img fluid={data.festFour.childImageSharp.fluid} />
            <h3 class="fest-header">Folk Games</h3>
        </div>
    </React.Fragment>

    )}

    />
)

export default Festimages
