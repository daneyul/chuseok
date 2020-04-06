import React from "react";
import "../styles/landing.scss";
import "../styles/images.scss";
import { a, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const Foodimages = () => (
    <StaticQuery
    query={graphql`
    query {
        foodOne: file(relativePath: { eq: "landing/recipes-thumb.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        foodTwo: file(relativePath: { eq: "landing/food-thumb.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        foodThree: file(relativePath: { eq: "landing/drink-thumb.png" }) {
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
        <a href="/recipes" onClick="window.location.reload();" class="food-image">
            <Img fluid={data.foodOne.childImageSharp.fluid} />
            <h2 class="landing-category landing-category__fest">Foods & Drinks</h2>
            <h3 class="landing-header__two">Need Recipes?</h3>
            <p>We’ve curated a list of food blogs for you to make your own delicious Korean meals for any occasion. </p>
        </a>
        <a href="/foods" onClick="window.location.reload();" class="food-image">
          <Img fluid={data.foodTwo.childImageSharp.fluid} />
          <h2 class="landing-category landing-category__fest">Foods & Drinks</h2>
          <h3 class="landing-header__two">Chuseok Foods</h3>
          <p>The classic dishes prepared on the first day of the Chuseok holiday.</p>
        </a>
        <a href="/drinks" onClick="window.location.reload();" class="food-image">
            <Img fluid={data.foodThree.childImageSharp.fluid} />
            <h2 class="landing-category landing-category__fest">Foods & Drinks</h2>
            <h3 class="landing-header__two">Traditional Korean Drinks</h3>
            <p>Beer, soju, and makgeolli are just a few of the many varieties of Korean alcohols.</p>
        </a>
    </React.Fragment>

    )}

    />
)

export default Foodimages
