
import React from "react";
import "../styles/landing.scss";
import Flowers from "./flowers";
import Festimages from "./festimages";
import Foodimages from "./foodimages";
import TableMedia from "./table";
import Placeimages from "./places";
import Adh from "./horizontal";

// import 'aos/dist/aos.css';
// var AOS = require('aos');



const Landing = ({ data }) => (
  <>
    <div id="hero">

      <div class="container nav-space">

        <div class="row justify-content-sm-start justify-content-lg-start justify-content-md-center">
          <div class="landing-flowers" id="scene">
            <Flowers />
          </div>
          <div class="col-sm-12 col-md-8 col-lg-6 landing-top slide-in-bottom--2">
            <h1 class="landing-kr text-left">추석</h1>
            <h1 class="landing-title text-left">Chuseok 2021</h1>
            <h1 class="landing-title2 text-left">September 20 - September 22</h1>
            <h4 class="text-left landing-title3">Celebrate and learn about the Korean Mid-Autumn harvest festival!<br />*Due to the global pandemic, some events and places may be restricted or closed until further notice.</h4>
          </div>
        </div>
      </div>

    </div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-12 text-center">
          <h2 class="landing-category--notice">Notice</h2>
          <p class="landing-header--description mb-5">
            If you or loved ones are in Korea, please check with your local cemeteries for closure dates. Many cemeteries may be closed during the Chuseok holidays, so please plan accordingly.
        </p>
        </div>
      </div>
    </div>

    <div class="pink-border"></div>

    <div class="container">
      <div data-aos="fade-up" data-aos-offset="10" data-aos-duration="600">
        <div id="tradition" class="row header-mb">
          <div class="col-12 d-flex justify-content-between flex-wrap">
            <div class="header-col-1">
              <h2 class="landing-category--top">Tradition</h2>
              <h3 class="landing-header__one">What is Chuseok?</h3>
              <p class="landing-header--description">Chuseok (추석) is one of the biggest holidays in Korea. It is sometimes referred to as “Korean Thanksgiving” because it’s a special time for family, friends, and food.</p>
            </div>
            <a href="/customs" onClick="window.location.reload();" class="header-col-2 box">
              <h2 class="landing-category--first">Tradition</h2>
              <h3 class="landing-header__two-top">Customs</h3>
              <p class="landing-header__two--description">Chuseok is a busy time and the customary way of celebrating it at home means lots of preparation.</p>
              <p class="landing-learn">Learn more</p>
            </a>
            <a href="/rabbit" onClick="window.location.reload();" class="header-col-2 box">
              <h2 class="landing-category--first">Tradition</h2>
              <h3 class="landing-header__two-top">Moon Rabbit</h3>
              <p class="landing-header__two--description">If you look closely at the moon, you'll see a rabbit making rice cakes beneath a tree.</p>
              <p class="landing-learn">Learn more</p>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="pink-border"></div>

    <div class="container">
      <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="150" data-aos-duration="600">
        <div id="food" class="row justify-content-sm-center justify-content-lg-between flex-wrap img-padding">
          <Foodimages />
        </div>
      </div>
    </div>

    <div class="pink-border d-md-none"></div>

    <div class="container">
      <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="150" data-aos-duration="600">
        <div id="fest" class="row justify-content-between flex-wrap img-padding fest-margin">
          <Festimages />
        </div>
      </div>
    </div>

    <div class="pink-border d-md-none"></div>

    <div class="container">
      <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="100" data-aos-duration="600">
        <div id="misc" class="row justify-content-between flex-wrap img-padding misc-margin">
          <TableMedia />
        </div>
      </div>
    </div>

    <div class="pink-border d-md-none"></div>

    <div class="container">
      <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="50" data-aos-duration="600">
        <div id="places" class="places-row img-padding misc-margin">
          <h2 class="landing-category landing-category__fest">Festivities</h2>
          <h3 class="landing-header__three">Places to Visit</h3>
          <p>Palace admissions are free during the holidays and amusement parks have specials!</p><p>*Due to the global pandemic, most places are closed until further notice.</p>
        </div>
      </div>
      <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="50" data-aos-duration="600" class="places-margin">
        <Placeimages />
      </div>
      <div class="col-10 mx-auto">
        <Adh />
      </div>
    </div>



  </>

)

if (typeof window !== 'undefined') {
  window.onload = function () {
    const Parallax = require('parallax-js')
    var scene = document.getElementById('scene');
    var parallaxInstance = new Parallax(scene);
    // AOS.init({once: true});
  };
}


export default Landing
