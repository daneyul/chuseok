import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/nav.scss"

const Nav = () => (
  <nav class="container-fluid nav-top">
    <div class="container">
    <div class="row">
        <ul class="col-4 nav-item justify-content-start">
          <li class="nav-item--left"><Link to="">Tradition</Link></li>
          <li><Link to="foods">Foods</Link></li>
        </ul>
        <ul class="col-4 nav-item justify-content-center">
          <li class="nav-item--center"><Link to="/">Chuseok 2019</Link></li>
        </ul>
        <ul class="col-4 nav-item justify-content-end">
          <li><Link to="">Table</Link></li>
          <li class="nav-item--right"><Link to="">Events</Link></li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Nav
