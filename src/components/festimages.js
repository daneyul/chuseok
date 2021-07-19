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
          festFour: file(relativePath: { eq: "landing/activity-thumb.jpg" }) {
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
      <h2 class="landing-category--section">The festivities of Chuseok</h2>
      <div id="fest" class="row justify-content-between flex-wrap img-padding fest-margin">
        <a href="/gifts" onClick="window.location.reload();" class="fest-image">
            <Img fluid={data.festTwo.childImageSharp.fluid}/>
            <h2 class="landing-category landing-category__fest">Festivities</h2>
            <h3 class="landing-header__two">Gift Sets</h3>
            <p>Learn more about the varieties of Chuseok gift sets.</p>
        </a>
        <a href="/hanbok" onClick="window.location.reload();" class="fest-image fest-image--second">
            <Img fluid={data.festOne.childImageSharp.fluid}/>
            <h2 class="landing-category landing-category__fest">Festivities</h2>
            <h3 class="landing-header__two">Wearing a Hanbok</h3>
            <p>A Hanbok is Korea's traditional clothing.</p>
        </a>
        <a href="/greetings" onClick="window.location.reload();" class="fest-image fest-image--second">
            <Img fluid={data.festThree.childImageSharp.fluid}/>
            <h2 class="landing-category landing-category__fest">Festivities</h2>
            <h3 class="landing-header__two">Greetings in Korean</h3>
            <p>Some Korean phrases, how to say them, and what they mean.</p>
        </a>
        <a href="/games" onClick="window.location.reload();" class="fest-image fest-image--second">
            <Img fluid={data.festFour.childImageSharp.fluid}/>
            <h2 class="landing-category landing-category__fest">Festivities</h2>
            <h3 class="landing-header__two">Folk Games</h3>
            <p>Discover the traditional activities that took place in Korea.</p>
        </a>
      </div>
    </React.Fragment>

    )}

    />
)

export default Festimages
