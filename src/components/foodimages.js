import React from "react";
import "../styles/landing.scss";
import "../styles/images.scss";
import { Link, graphql, StaticQuery } from "gatsby";
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
            <h3 class="landing-recipes">Need Recipes?</h3>
            <Img fluid={data.foodTwo.childImageSharp.fluid} />
            <h3 class="food-header food-header--drink">Traditional Drinks</h3>
        </div>
        <div class="food-image--food">
            <Img fluid={data.foodOne.childImageSharp.fluid} />
            <h3 class="food-header food-header--food">Typical Chuseok Foods</h3>
        </div>
    </React.Fragment>

    )}

    />
)

export default Foodimages
