import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/nav.scss"
import s1 from "../images/landing/twitter-icon.svg"
import s2 from "../images/landing/facebook-icon.svg"
import s3 from "../images/landing/linkedin-icon.svg"

const Nav = () => (
  <nav class="container-fluid nav-top" id="navbar">
    <div class="container">
      <div id="nav-list" class="row">

        <ul class="col-4 nav-item justify-content-between">
          <li class="nav-dropdown--parent"><a href="#">Traditions</a>
            <ul class="nav-dropdown nav-box slide-in-top">
              <li class="nav-dropdown--item"><a href="/ceremonies">Customs & Ceremonies</a></li>
              <li class="nav-dropdown--item"><a href="/rabbit">The Moon Rabbit</a></li>
              <li class="nav-dropdown--item"><a href="/table">Table Setting</a></li>
            </ul>
          </li>
          <li class="nav-dropdown--parent"><a href="#">Foods & Drinks</a>
            <ul class="nav-dropdown nav-box slide-in-top">
              <li class="nav-dropdown--item"><a href="/foods">Chuseok Foods</a></li>
              <li class="nav-dropdown--item"><a href="/drinks">Chuseok Drinks</a></li>
              <li class="nav-dropdown--item"><a href="/recipes">Chuseok Recipes</a></li>
            </ul>
          </li>
        </ul>

        <ul class="col-4 nav-item justify-content-center">
          <a href="/" onClick="window.location.reload();"><li class="nav-item--center">Chuseok 2019</li></a>
        </ul>

        <ul class="col-4 nav-item justify-content-between">
          <li class="nav-dropdown--parent"><a href="#">Festivities</a>
            <ul class="nav-dropdown nav-box slide-in-top">
              <li class="nav-dropdown--item"><a href="/#places">Places to Visit</a></li>
              <li class="nav-dropdown--item"><a href="/#media">Shows & Media</a></li>
              <li class="nav-dropdown--item"><a href="/hanbok">Hanbok</a></li>
              <li class="nav-dropdown--item"><a href="/gifts">Gifts</a></li>
              <li class="nav-dropdown--item"><a href="/greetings">Greetings</a></li>
              <li class="nav-dropdown--item"><a href="/games">Folk Games</a></li>
            </ul>
          </li>
          <li class="nav-dropdown--parent">
            <span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fchuseok.info&text=Celebrate%20Chuseok%202019%21%20Learn%20about%20the%20Korean%20harvest%20festival." target="_blank"><img src={s1} alt="Share on Twitter" class="social-icons--first"/></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchuseok.info%2F&amp;src=sdkpreparse" target="_blank"><img src={s2} alt="Share on Facebook" class="social-icons--second"/></a>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fchuseok.info" target="_blank"><img src={s3} alt="Share on LinkedIn" class="social-icons--third"/></a>
            </span>
          </li>

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