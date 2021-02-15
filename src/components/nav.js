import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
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
                <li className="nav-dropdown--item"><a href="/customs">Customs</a></li>
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

          <ul className="col-6 col-md-4 nav-item nav-middle active">
            <a href="/" onClick="window.location.reload();"><li className="nav-item--center">Chuseok 2021</li></a>
          </ul>

          <ul className="col-4 nav-item justify-content-between nav-sides">
            <li className="nav-dropdown--parent"><a href="#">Festivities</a>
              <ul className="nav-dropdown nav-box slide-in-top">
                <li className="nav-dropdown--item"><a href="/#places">Places to Visit</a></li>
                <li className="nav-dropdown--item"><a href="/media">Shows & Media</a></li>
                <li className="nav-dropdown--item"><a href="/hanbok">Hanbok</a></li>
                <li className="nav-dropdown--item"><a href="/gifts">Gifts</a></li>
                <li className="nav-dropdown--item"><a href="/greetings">Greetings</a></li>
                <li className="nav-dropdown--item"><a href="/games">Folk Games</a></li>
              </ul>
            </li>
            <li className="nav-dropdown--parent">
              <span>
                <a href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fchuseok.info&text=Celebrate%20Chuseok%202120%21%20Learn%20about%20the%20Korean%20harvest%20festival." target="_blank" rel="noopener noreferrer"><img src={s1} alt="Share on Twitter" className="social-icons--first" /></a>
                <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fchuseok.info%2F&amp;src=sdkpreparse" target="_blank" rel="noopener noreferrer"><img src={s2} alt="Share on Facebook" className="social-icons--second" /></a>
                <a href="https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fchuseok.info" target="_blank" rel="noopener noreferrer"><img src={s3} alt="Share on LinkedIn" className="social-icons--third" /></a>
              </span>
            </li>
          </ul>

          <button className="hamburger hamburger--slider ham-button" id="js-navbar-toggle" type="button" aria-label="Menu" aria-controls="navigation">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>

        </div>
      </div>
    </nav>
    <div class="ham-bg footer-font container ham-display">
      <div class="row footer-color justify-content-lg-between flex-wrap">
        <div class="col-6 col-lg-4">
          <h5 class="footer-category--ham"><span class="footer-color footer-font landing-category--dotted footer-category">Traditions</span></h5>
          <ul>
            <li class="footer-link--ham"><a href="/customs" onClick="window.location.reload();" class="footer-font footer-color">Customs</a></li>
            <li class="footer-link--ham"><a href="/rabbit" onClick="window.location.reload();" class="footer-font footer-color">The Moon Rabbit</a></li>
            <li class="footer-link--ham"><a href="/table" onClick="window.location.reload();" class="footer-font footer-color">Table Setting</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-4">
          <h5 class="footer-category--ham"><span class="footer-color footer-font landing-category--dotted footer-category">Food & Drinks</span></h5>
          <ul>
            <li class="footer-link--ham"><a href="/foods" onClick="window.location.reload();" class="footer-font footer-color">Chuseok Foods</a></li>
            <li class="footer-link--ham"><a href="/drinks" onClick="window.location.reload();" class="footer-font footer-color">Chuseok Drinks</a></li>
            <li class="footer-link--ham"><a href="/recipes" onClick="window.location.reload();" class="footer-font footer-color">Chuseok Recipes</a></li>
          </ul>
        </div>
        <div class="col-6 col-lg-4 footer-bottom">
          <h5 class="footer-category--ham"><span class="footer-color footer-font landing-category--dotted footer-category">Festivities</span></h5>
          <ul>
            <li class="footer-link--ham"><a href="/#places" onClick="window.location.reload();" class="footer-font footer-color">Places to Visit</a></li>
            <li class="footer-link--ham"><a href="/media" onClick="window.location.reload();" class="footer-font footer-color">Shows & Media</a></li>
            <li class="footer-link--ham"><a href="/hanbok" onClick="window.location.reload();" class="footer-font footer-color">Hanbok</a></li>
            <li class="footer-link--ham"><a href="/gifts" onClick="window.location.reload();" class="footer-font footer-color">Gifts</a></li>
            <li class="footer-link--ham"><a href="/greetings" onClick="window.location.reload();" class="footer-font footer-color">Greetings</a></li>
            <li class="footer-link--ham"><a href="/games" onClick="window.location.reload();" class="footer-font footer-color">Folk Games</a></li>
          </ul>
        </div>
      </div>
    </div>
  </React.Fragment>

)

export default Nav

if (typeof window !== 'undefined') {
  var prevScrollpos = window.pageYOffset;

  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  }

  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  var hamburgerMenu = document.querySelector(".ham-bg");
  var body = document.querySelector("main");
  var foot = document.querySelector(".footer-bg");
  var blog = document.querySelector(".blog-hide");
  // On click
  hamburger.addEventListener("click", function () {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
    hamburgerMenu.classList.toggle("ham-is-active");
    body.classList.toggle("main-hide");
    foot.classList.toggle("main-hide");
    blog.classList.toggle("main-hide");
  });

}
