import React from "react";
import "../styles/landing.scss";
import "../styles/images.scss";
import { a, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const Foodimages = () => (
    <StaticQuery
    query={graphql`
    query {
        foodOne: file(relativePath: { eq: "landing/food-thumb.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        foodTwo: file(relativePath: { eq: "landing/drink-thumb.png" }) {
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
        <div class="food-image--drink">
            <a href="recipes" onClick="window.location.reload();">
              <h3 class="landing-recipes">Need Recipes?</h3>
            </a>
            <a href="drinks" onClick="window.location.reload();" class="food-image food-image--box">
              <Img fluid={data.foodTwo.childImageSharp.fluid} />
              <h3 class="food-header food-header--drink">Traditional Drinks</h3>
            </a>
        </div>
          <div class="food-image--food">
            <a href="foods" onClick="window.location.reload();" class="food-image food-image--box">
              <Img fluid={data.foodOne.childImageSharp.fluid}/>
              <h3 class="food-header food-header--food">Typical Chuseok Foods</h3>
            </a>
        </div>
    </React.Fragment>

    )}

    />
)

export default Foodimages
