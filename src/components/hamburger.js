import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "../styles/nav.scss"
import "../styles/footer.scss";

const HamburgerMenu = () => (
<div class="ham-bg footer-font container " id="js-menu">
    <div class="row footer-color justify-content-lg-between flex-wrap">
        <div class="col-6 col-lg-2">
            <h5 class="footer-category"><span class="footer-color footer-font landing-category--dotted footer-category">Traditions</span></h5>
            <ul>
                <li><a href="/ceremonies" onClick="window.location.reload();" class="footer-font footer-color footer-link">Customs & Ceremonies</a></li>
                <li><a href="/rabbit" onClick="window.location.reload();" class="footer-font footer-color footer-link">The Moon Rabbit</a></li>
                <li><a href="/table" onClick="window.location.reload();" class="footer-font footer-color footer-link">Table Setting</a></li>
            </ul>
        </div>
        <div class="col-6 col-lg-2">
            <h5 class="footer-category"><span class="footer-color footer-font landing-category--dotted footer-category">Food & Drinks</span></h5>
            <ul>
                <li><a href="/foods" onClick="window.location.reload();" class="footer-font footer-color footer-link">Chuseok Foods</a></li>
                <li><a href="/drinks" onClick="window.location.reload();" class="footer-font footer-color footer-link">Chuseok Drinks</a></li>
                <li><a href="/recipes" onClick="window.location.reload();" class="footer-font footer-color footer-link">Chuseok Recipes</a></li>
            </ul>
        </div>
        <div class="col-6 col-lg-2 footer-bottom">
            <h5 class="footer-category"><span class="footer-color footer-font landing-category--dotted footer-category">Festivities</span></h5>
            <ul>
                <li><a href="/#places" onClick="window.location.reload();" class="footer-font footer-color footer-link">Places to Visit</a></li>
                <li><a href="/#media" onClick="window.location.reload();" class="footer-font footer-color footer-link">Shows & Media</a></li>
                <li><a href="/hanbok" onClick="window.location.reload();" class="footer-font footer-color footer-link">Hanbok</a></li>
                <li><a href="/gifts" onClick="window.location.reload();" class="footer-font footer-color footer-link">Gifts</a></li>
                <li><a href="/greetings" onClick="window.location.reload();" class="footer-font footer-color footer-link">Greetings</a></li>
                <li><a href="/games" onClick="window.location.reload();" class="footer-font footer-color footer-link">Folk Games</a></li>
            </ul>
        </div>
    </div>
    </div>
)

export default HamburgerMenu