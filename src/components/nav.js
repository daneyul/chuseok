import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/nav.scss"

const Nav = () => (
  <nav class="container-fluid nav-top" id="navbar">
    <div class="container">
      <div id="nav-list" class="row">

        <ul class="col-4 nav-item justify-content-between">
          <li class="nav-dropdown--parent"><a href="#">Traditions</a>
            <ul class="nav-dropdown">
              <li class="nav-dropdown--item"><a href="/ceremonies">Customs & Ceremonies</a></li>
              <li class="nav-dropdown--item"><a href="/rabbit">The Moon Rabbit</a></li>
              <li class="nav-dropdown--item"><a href="/table">Table Setting</a></li>
            </ul>
          </li>
          <li><a href="#">Foods & Drinks</a>
            <ul class="nav-dropdown">
              <li class="nav-dropdown--item"><a href="/foods">Chuseok Foods</a></li>
              <li class="nav-dropdown--item"><a href="/drinks">Chuseok Drinks</a></li>
              <li class="nav-dropdown--item"><a href="/recipes">Chuseok Recipes</a></li>
            </ul>
          </li>
        </ul>

        <ul class="col-4 nav-item justify-content-center">
          <li class="nav-item--center"><a href="/" onClick="window.location.reload();">Chuseok 2019</a></li>
        </ul>

        <ul class="col-4 nav-item justify-content-between">
          <li><a href="/table" onClick="window.location.reload();">Table</a></li>
          <li><a href="/#places" onClick="window.location.reload();">Places</a></li>
          <li><a href="/#media" onClick="window.location.reload();">Media</a></li>
        </ul>

      </div>
    </div>
  </nav>

)

export default Nav

if (typeof window !== 'undefined') {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  }
  
  }