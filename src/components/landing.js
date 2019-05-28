import { Link, graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import "../styles/leader.scss";
import "../styles/landing.scss";
import Flowers from "./flowers";

const Landing = () => (

    <div class="container">

      <div class="row justify-content-end">
        <div class="col-12">
          <Flowers />
          <h1 class="landing-title text-right">추석<br />Chuseok</h1>
          <h1 class="landing-title2 text-right">September 12-14, 2019</h1>
        </div>
      </div>
      <div class="row justify-content-end landing-title3--margin">
        <div class="col-12">
          <h4 class="leader leader--first text-right"><span class="landing-title3">Celebrate the Korean Harvest Festival and learn about what it is, what is <br class="landing-title3--break"/>eaten, or the elaborate table settings during these special three days.</span></h4>
        </div>
      </div>
      <div class="row justify-content-start">
        <h2 class="landing-category">Tradition</h2>
        <div class="col-4">
          <h3 class="">What is Chuseok?</h3>
        </div>
        <div class="col-4">
        </div>
        <div class="col-4">
        </div>
      </div>

    </div>

  )

  export default Landing


  