import { Link, graphql, StaticQuery } from "gatsby";
import React from "react";
import "../styles/landing.scss";
import Flowers from "./flowers";
import Festimages from "./festimages";
import Foodimages from "./foodimages";
import Tableimage from "./table";
import Placeimages from "./places";

const Landing = ({data}) => (
  
    <div class="container nav-space">
      
      <div class="row justify-content-end">
        <div class="col-12">
          <Flowers />
          <h1 class="landing-title text-right">추석<br />Chuseok</h1>
          <h1 class="landing-title2 text-right">September 12-14, 2019</h1>
        </div>
      </div>

      <div class="row justify-content-end landing-title3--margin">
        <div class="col-12">
          <h4 class="leader--first text-right"><span class="landing-title3">Celebrate the Korean Harvest Festival and learn about <Link to="tradition" activeStyle={{ textDecoration: "underline" }}>what it is</Link><br class="landing-title3--break"/> and <Link to="" activeStyle={{ textDecoration: "underline" }}>what's happening during this time.</Link></span></h4>
        </div>
      </div>

      <div class="row justify-content-start header-mt">
        <h2 class="landing-category--first">Tradition</h2>
      </div>
      <div class="row justify-content-between header-mb">
        <div class="header-col-1 box">
          <h3 class="landing-header__one">What is Chuseok?</h3>
          <p class="landing-header--description">Chuseok (추석) is one of the biggest holidays in Korea. It is sometimes referred to as “Korean Thanksgiving” because it’s a special time for family, friends, and food.</p>
        </div>
        <div class="header-col-2 box">
          <h3 class="landing-header__two">Customs & Ceremonies</h3>
          <p class="landing-header__two--description">Chuseok is a busy time and the customary way of celebrating it at home means lots of preparation.</p>
        </div>
        <div class="header-col-2 box">
          <h3 class="landing-header__two">The Moon Rabbit</h3>
          <p class="landing-header__two--description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </div>

      <div class="row justify-content-start">
        <div class="landing-category--col">
          <h2 class="leader--second text-left"><span class="landing-category--second">Festivities</span></h2>
        </div>
      </div>
      <div class="row justify-content-between header-mb flex-wrap">
        <Festimages />
      </div>

      <div class="row justify-content-start">
        <div class="landing-category--col">
          <h2 class="leader--third text-left"><span class="landing-category--third">Food</span></h2>
        </div>
      </div>
      <div class="row justify-content-between header-mb">
        <Foodimages />
      </div>

      <div class="row justify-content-end">
        <div class="landing-category--col">
          <h2 class="leader--fourth text-right"><span class="landing-category--fourth">Did you know that food is traditionally laid out a certain way?</span></h2>
        </div>
      </div>

      <div class="row justify-content-center header-mb">
          <Tableimage />
          <p class="mt-4 text-center">
          Here are some guidelines to placing food on the table. <br /> Although, setting up the table the right way isn’t so crucial these days.
          </p>
      </div>

      <div class="row justify-content-start">
        <div class="landing-category--col">
          <h2 class="leader--third text-left"><span class="landing-category--third">Festivities</span></h2>
        </div>
      </div>

      <div class="row justify-content-start">
        <p class="landing-festivities--header">Check out some events in Seoul during Chuseok.</p>
      </div>

      <Placeimages />

    </div>

  )


  export default Landing
  