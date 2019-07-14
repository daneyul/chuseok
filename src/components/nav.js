import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/nav.scss"

const Nav = () => (
  <nav class="container-fluid nav-top" id="navbar">
    <div class="container">
    <div id="nav-list" class="row">
        <ul class="col-4 nav-item justify-content-between">
          <li><a href="/tradition" onClick="window.location.reload();">Tradition</a></li>
          <li><a href="/foods" onClick="window.location.reload();">Foods</a></li>
          <li><a href="/drinks" onClick="window.location.reload();">Drinks</a></li>
        </ul>
        <ul class="col-4 nav-item justify-content-center">
          <li class="nav-item--center"><a href="/" onClick="window.location.reload();">Chuseok 2019</a></li>
        </ul>
        <ul class="col-4 nav-item justify-content-between">
          <li><a href="/table" onClick="window.location.reload();">Table</a></li>
          <li><a href="#places" onClick="window.location.reload();">Places</a></li>
          <li><a href="#media" onClick="window.location.reload();">Media</a></li>
        </ul>
      </div>
    </div>
  </nav>

)

export default Nav
