import React from "react"
import "../styles/landing.scss"
import Flowers from "./flowers"
import Festimages from "./festimages"
import Foodimages from "./foodimages"
import TableMedia from "./table"
import Adh from "./horizontal"
import SEO from "./seo"
import Timer from "./timer"

// import 'aos/dist/aos.css';
// var AOS = require('aos');

const desc =
  "Celebrate and learn about the foods, traditions, and festivities of one of Korea's most important holidays, Chuseok."
const title = "Korean Thanksgiving"

const Landing = () => (
  <>
    <SEO title={title} desc={desc} />
    <div id="hero">
      <div class="container nav-space">
        <div class="row justify-content-center">
          <div class="col-sm-12 col-md-8 landing-top slide-in-bottom--2">
            <h1 class="landing-kr text-center">추석</h1>
            <h1 class="landing-title text-center">Chuseok 2022</h1>
            <h4 class="text-center landing-title3">
              Celebrate and learn about the Korean Mid-Autumn harvest festival!
            </h4>
          </div>
        </div>
        <Flowers />
      </div>
      <Timer />
    </div>

    <div class="container">
      <div data-aos="fade-up" data-aos-offset="10" data-aos-duration="600">
        <div id="tradition" class="row header-mb">
          <div class="col-12 d-flex justify-content-between flex-wrap">
            <div class="header-col-1">
              <h2 class="landing-category--top">What is Chuseok?</h2>
              <p class="landing-header--description">
                Chuseok ("choo-suhk") is one of the biggest holidays in Korea.
                It is sometimes referred to as “Korean Thanksgiving” because
                it’s a special time for family, friends, and food.
              </p>
            </div>
            <div class="header-col-2">
              <h2 class="landing-category--top">When is it?</h2>
              <h3 class="landing-header__two-top">September 10, 2022</h3>
              <p class="landing-header__two--description">
                This year, Chuseok is 10 days earlier than last years (September
                10, 2022).
              </p>
            </div>
            <div class="header-col-2">
              <h2 class="landing-category--top">For how long?</h2>
              <h3 class="landing-header__two-top">3 Days!</h3>
              <p class="landing-header__two--description">
                From September 9-12.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="pink-border"></div>

    <div class="container food-section">
      <div
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="150"
        data-aos-duration="600"
      >
        <Foodimages />
        <script
          type="text/javascript"
          src="https://udbaa.com/bnr.php?section=horizontal&pub=451155&format=728x90&ga=g"
        ></script>
        <noscript>
          <a href="https://yllix.com/publishers/451155" target="_blank">
            <img
              src="//ylx-aff.advertica-cdn.com/pub/728x90.png"
              class="horizontal-ad"
              alt="ylliX - Online Advertising Network"
            />
          </a>
        </noscript>
      </div>
    </div>

    <Adh />

    <div class="pink-border"></div>

    <div class="container fest-section">
      <div
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="150"
        data-aos-duration="600"
      >
        <Festimages />
      </div>
    </div>

    <Adh />

    <div class="pink-border"></div>

    <div class="container">
      <div
        data-aos="fade-up"
        data-aos-offset="10"
        data-aos-delay="100"
        data-aos-duration="600"
      >
        <div
          id="misc"
          class="row justify-content-between flex-wrap img-padding misc-margin"
        >
          <TableMedia />
          <Adh />
        </div>
      </div>
    </div>
  </>
)

// if (typeof window !== 'undefined') {
//   window.onload = function () {
//     const Parallax = require('parallax-js')
//     var scene = document.getElementById('scene');
//     var parallaxInstance = new Parallax(scene);
//     AOS.init({once: true});

//     let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     let scrolled = (winScroll / height) * 100;
//     document.querySelector("#progress").style.width = scrolled + "%";
//   };
// }

export default Landing
