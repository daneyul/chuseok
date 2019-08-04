import { Link, graphql, StaticQuery } from "gatsby";
import React from "react";
import "../styles/landing.scss";
import Flowers from "./flowers";
import Festimages from "./festimages";
import Foodimages from "./foodimages";
import Tableimage from "./table";
import Placeimages from "./places";
import 'aos/dist/aos.css';
var AOS = require('aos');



const Landing = ({data}) => (
    <div class="container nav-space">
      
      <div class="row justify-content-start">
        <div class="landing-flowers" id="scene">
          <Flowers />
        </div>
        <div class="col-12 landing-top slide-in-bottom--2">
          <h1 class="landing-title text-left">추석<br />Chuseok</h1>
          <h1 class="landing-title2 text-left">September 12-14, 2019</h1>
        </div>
      </div>

      <div data-aos="fade-up" data-aos-offset="10" data-aos-duration="600">
      <div class="row justify-content-start landing-title3--margin">
        <div class="col-12">
          <h4 class="leader--first text-left landing-title3"><span>Celebrate the Korean Harvest Festival! Learn about what it is<br class="landing-title3--break"/> and what's happening during this time.</span></h4>
        </div>
      </div>
      </div>

      <div data-aos="fade-up" data-aos-offset="10" data-aos-duration="600">
      <div class="row justify-content-start header-mt">
        <div class="col-12">
          <h2 class="landing-category--first ">Tradition</h2>
        </div>
      </div>
      <div class="row header-mb">
        <div class="col-12 d-flex justify-content-between flex-wrap">
          <div class="header-col-1">
            <h3 class="landing-header__one">What is Chuseok?</h3>
            <p class="landing-header--description">Chuseok (추석) is one of the biggest holidays in Korea. It is sometimes referred to as “Korean Thanksgiving” because it’s a special time for family, friends, and food.</p>
          </div>
          <a href="/ceremonies" onClick="window.location.reload();" class="header-col-2 box">
              <h3 class="landing-header__two">Customs</h3>
              <p class="landing-header__two--description">Chuseok is a busy time and the customary way of celebrating it at home means lots of preparation.</p>
          </a>
          <a href="/rabbit" onClick="window.location.reload();" class="header-col-2 box">
            <h3 class="landing-header__two">Moon Rabbit</h3>
            <p class="landing-header__two--description">If you look closely at the moon, you'll see a rabbit making rice cakes beneath a tree.</p>
          </a>
        </div>
      </div>
      </div>

      <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="50" data-aos-duration="600">
      <div class="row justify-content-start">
        <div class="landing-category--col">
          <h2 class="leader--third text-left"><span class="landing-category--third">Festivities</span></h2>
        </div>
      </div>
      </div>
      <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="150" data-aos-duration="600">
      <div class="row justify-content-between header-mb flex-wrap img-padding">
        <Festimages />
      </div>
      </div>

      <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="50" data-aos-duration="600">
      <div class="row justify-content-start">
        <div class="landing-category--col">
          <h2 class="leader--fourth text-left"><span class="landing-category--third">Food</span></h2>
        </div>
      </div>
      </div>
      <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="150" data-aos-duration="600">
      <div class="row justify-content-sm-center justify-content-lg-between header-mb flex-wrap img-padding">
        <Foodimages />
      </div>
      </div>

      <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="50" data-aos-duration="600">
      <div class="row justify-content-lg-end">
        <div class="landing-category--col">
          <h2 class="leader--fifth text-lg-right header-mb"><span class="landing-category--fourth">Did you know that food is traditionally laid out a certain way?</span></h2>
        </div>
      </div>
      </div>
      <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="100" data-aos-duration="600">
      <Tableimage />
      </div>

      <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="50" data-aos-duration="600">
      <div class="row justify-content-start header-mb--media" id="media">
        <div class="landing-category--col">
          <h2 class="leader--seventh text-left"><span class="landing-category--third">Media</span></h2>
        </div>
      </div>
      </div>

      <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="50" data-aos-duration="600">
      <div class="row justify-content-start header-mb">
        <div class="col-6">
        <a href="/media" onClick="window.location.reload();">
          <div class="table-box">
            <h2 class="table-header">Broadcasting</h2>
            <p class="mt-4">Television broadcast schedules are some of the most searched terms during Chuseok. Movies, TV dramas, and variety shows play all throughout the holiday. Watching TV is an informal Chuseok event.</p>
          </div>
        </a>
        </div>
        <div class="col-6">

        </div>
      </div>
      </div>

      <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="50" data-aos-duration="600">
      <div class="row justify-content-start" id="places">
        <div class="landing-category--col">
          <h2 class="leader--sixth text-left"><span class="landing-category--third">Festivities</span></h2>
        </div>
      </div>
      </div>

      <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="50" data-aos-duration="600">
      <div class="row justify-content-start img-padding">
        <p class="landing-festivities--header">Palace admissions are free during the holidays and amusement parks have specials! </p>
      </div>
      </div>
      <div data-aos="fade-up" data-aos-offset="10" data-aos-delay="50" data-aos-duration="600">
      <Placeimages />
      </div>


    </div>


  )
  
  if (typeof window !== 'undefined') {

    window.onload = function () { 
      const Parallax = require('parallax-js')
      var scene = document.getElementById('scene');
      var parallaxInstance = new Parallax(scene);
      AOS.init({once: true});
    };
    }

  export default Landing
  