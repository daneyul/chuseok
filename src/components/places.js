import React from "react";
import "../styles/landing.scss";
import "../styles/images.scss";
import "../styles/custom.scss";
import { Link, graphql, StaticQuery } from "gatsby";
import Img from "gatsby-image";

const Placeimages = () => (
    <StaticQuery
    query={graphql`
    query {
        placeOne: file(relativePath: { eq: "landing/gyeongbokgung-thumb.png" }) {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        },
        placeTwo: file(relativePath: { eq: "landing/deoksugung-thumb.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          },
        placeThree: file(relativePath: { eq: "landing/changgyeonggung-thumb.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          },
        placeFour: file(relativePath: { eq: "landing/changdeokgung-thumb.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          },
        placeFive: file(relativePath: { eq: "landing/seonjeongneung-thumb.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          },
        placeSix: file(relativePath: { eq: "landing/jongmyo-thumb.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          },
        placeSeven: file(relativePath: { eq: "landing/lotte-thumb.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          },
        placeEight: file(relativePath: { eq: "landing/everland-thumb.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          },
        placeNine: file(relativePath: { eq: "landing/seoulland-thumb.png" }) {
            childImageSharp {
              fluid(maxWidth: 800) {
                ...GatsbyImageSharpFluid
              }
            }
          },
      }
    `}

    render ={data => (
        
    <React.Fragment>
        <div class="row justify-content-between flex-wrap header-mb img-padding">
            <div class="place-image">
                <Img fluid={data.placeOne.childImageSharp.fluid} />
                <h4 class="place-title">Gyeongbokgung Palace<br />경복궁</h4>
            </div>
            <div class="place-image">
                <Img fluid={data.placeTwo.childImageSharp.fluid} />
                <h4 class="place-title">Deoksugung Palace<br />덕수궁</h4>
            </div>
            <div class="place-image">
                <Img fluid={data.placeThree.childImageSharp.fluid} />
                <h4 class="place-title">Changgyeonggung Palace<br />창경궁</h4>
            </div>
            <div class="place-image">
                <Img fluid={data.placeFour.childImageSharp.fluid} />
                <h4 class="place-title">Changdeokgung Palace<br />창덕궁</h4>
            </div>
            <div class="place-image">
                <Img fluid={data.placeFive.childImageSharp.fluid} />
                <h4 class="place-title">Seonjeongneung Royal Tombs<br />선정릉</h4>
            </div>
            <div class="place-image">
                <Img fluid={data.placeSix.childImageSharp.fluid} />
                <h4 class="place-title">Jongmyo Shrine<br />종묘</h4>
            </div>
            <div class="place-image">
                <Img fluid={data.placeSeven.childImageSharp.fluid} />
                <h4 class="place-title">Lotte World<br />롯데월드 어드벤처</h4>
            </div>
            <div class="place-image">
                <Img fluid={data.placeEight.childImageSharp.fluid} />
                <h4 class="place-title">Everland<br />	에버랜드</h4>
            </div>
            <div class="place-image">
                <Img fluid={data.placeNine.childImageSharp.fluid} />
                <h4 class="place-title">Seoul Land<br />서울랜드</h4>
            </div>
            <div class="place-image">
            </div>
        </div>
    </React.Fragment>

    )}

    />
)

export default Placeimages
