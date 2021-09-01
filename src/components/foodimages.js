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
        },
        foodFour: file(relativePath: { eq: "landing/snacks-thumb.jpg" }) {
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
      <h2 class="landing-category--section">What to eat and drink</h2>
      <div id="food" class="row justify-content-sm-center justify-content-lg-between flex-wrap img-padding">
        <div class="d-flex flex-wrap justify-content-between">
          <a href="/snacks" onClick="window.location.reload();" class="food-image">
              <Img fluid={data.foodFour.childImageSharp.fluid} alt="snacks" />
              <h2 class="landing-category landing-category__fest">Foods & Drinks</h2>
              <h3 class="landing-header__two">Snacks</h3>
              <p>Sweet or savory, take a look at some traditional Korean snacks.</p>
          </a>
          <a href="/foods" onClick="window.location.reload();" class="food-image">
            <Img fluid={data.foodTwo.childImageSharp.fluid} alt="foods"/>
            <h2 class="landing-category landing-category__fest">Foods & Drinks</h2>
            <h3 class="landing-header__two">Chuseok Foods</h3>
            <p>The classic dishes prepared on the first day of the Chuseok holiday.</p>
          </a>
          <a href="/drinks" onClick="window.location.reload();" class="food-image">
              <Img fluid={data.foodThree.childImageSharp.fluid} alt="drinks"/>
              <h2 class="landing-category landing-category__fest">Foods & Drinks</h2>
              <h3 class="landing-header__two">Traditional Korean Drinks</h3>
              <p>Beer, soju, and makgeolli are just a few of the many varieties of Korean alcohols.</p>
          </a>
        </div>
      </div>
      <div class="d-flex flex-wrap justify-content-between">
        <div class="food-image--large">
          <a href="/recipes" onClick="window.location.reload();">
            <Img fluid={data.foodOne.childImageSharp.fluid} alt="recipes"/>
          </a>
        </div>
        <div class="recipes-mt">
          <h2 class="landing-category">Foods & Drinks</h2>
          <h3 class="landing-header__recipes"><a href="/recipes" class="food-image">Need recipes?</a></h3>
          <p>We’ve curated a list of food blogs for you to make your own delicious Korean meals for any occassion.</p>
        </div>
      </div>
    </React.Fragment>

    )}

    />
)

export default Foodimages
