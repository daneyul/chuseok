import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import HamburgerMenu from "./hamburger";
import s1 from "../images/landing/twitter-icon.svg"
import s2 from "../images/landing/facebook-icon.svg"
import s3 from "../images/landing/linkedin-icon.svg"


const Nav = () => (
  
  <React.Fragment>
  <nav className="container-fluid nav-top slide-from-bottom" id="navbar">
    <div className="container">
      <div id="nav-list" className="row justify-content-between">

        <ul className="col-4 nav-item justify-content-between nav-sides">
          <li className="nav-dropdown--parent"><a href="#">Traditions</a>
            <ul className="nav-dropdown nav-box slide-in-top">
              <li className="nav-dropdown--item"><a href="/ceremonies">Customs & Ceremonies</a></li>
              <li className="nav-dropdown--item"><a href="/rabbit">The Moon Rabbit</a></li>
              <li className="nav-dropdown--item"><a href="/table">Table Setting</a></li>
            </ul>
          </li>
          <li className="nav-dropdown--parent"><a href="#">Foods & Drinks</a>
            <ul className="nav-dropdown nav-box slide-in-top">
              <li className="nav-dropdown--item"><a href="/foods">Chuseok Foods</a></li>
              <li className="nav-dropdown--item"><a href="/drinks">Chuseok Drinks</a></li>
              <li className="nav-dropdown--item"><a href="/recipes">Chuseok Recipes</a></li>
            </ul>
          </li>
        </ul>

        <ul className="col-6 col-md-4 nav-item nav-middle justify-content-center active">
          <a href="/" onClick="window.location.reload();"><li className="nav-item--center">Chuseok 2019</li></a>
        </ul>

        <ul className="col-4 nav-item justify-content-between nav-sides">
          <li className="nav-dropdown--parent"><a href="#">Festivities</a>
            <ul className="nav-dropdown nav-box slide-in-top">
              <li className="nav-dropdown--item"><a href="/#places">Places to Visit</a></li>
              <li className="nav-dropdown--item"><a href="/#media">Shows & Media</a></li>
              <li className="nav-dropdown--item"><a href="/hanbok">Hanbok</a></li>
              <li className="nav-dropdown--item"><a href="/gifts">Gifts</a></li>
              <li className="nav-dropdown--item"><a href="/greetings">Greetings</a></li>
              <li className="nav-dropdown--item"><a href="/games">Folk Games</a></li>
            </ul>
          </li>
          <li className="nav-dropdown--parent">
            <span>
              <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fchuseok.info&text=Celebrate%20Chuseok%202019%21%20Learn%20about%20the%20Korean%20harvest%20festival." target="_blank" rel="noopener noreferrer"><img src={s1} alt="Share on Twitter" className="social-icons--first"/></a>
              <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchuseok.info%2F&amp;src=sdkpreparse" target="_blank" rel="noopener noreferrer"><img src={s2} alt="Share on Facebook" className="social-icons--second"/></a>
              <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fchuseok.info" target="_blank" rel="noopener noreferrer"><img src={s3} alt="Share on LinkedIn" className="social-icons--third"/></a>
            </span>
          </li>
        </ul>

        <div className="ham-button">
          <button className="hamburger hamburger--slider" id="js-navbar-toggle" type="button" aria-label="Menu" aria-controls="navigation">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>  
        </div>

      </div>
    </div>
  </nav>
  <HamburgerMenu />
  </React.Fragment>

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



  




  
