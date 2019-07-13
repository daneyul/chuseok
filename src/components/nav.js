import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/nav.scss"
import "../styles/custom.scss"

const Nav = () => (
  <nav class="container-fluid nav-top" id="navbar">
    <div class="container">
    <div id="nav-list" class="row">
        <ul class="col-4 nav-item justify-content-between">
          <li><Link to="/tradition">Tradition</Link></li>
          <li><Link to="/foods">Foods</Link></li>
          <li><Link to="/drinks">Drinks</Link></li>
        </ul>
        <ul class="col-4 nav-item justify-content-center">
          <li class="nav-item--center"><Link to="/">Chuseok 2019</Link></li>
        </ul>
        <ul class="col-4 nav-item justify-content-between">
          <li><Link to="/table">Table</Link></li>
          <li><Link to="">Places</Link></li>
          <li><Link to="">Media</Link></li>
        </ul>
      </div>
    </div>
  </nav>

)

export default Nav
