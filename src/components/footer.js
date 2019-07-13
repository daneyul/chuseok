import { Link, graphql, StaticQuery } from "gatsby";
import React from "react";
import "../styles/footer.scss";
import "../styles/landing.scss";
import "../styles/custom.scss";

const Footer = () => (
<div class="footer-bg footer-font">
    <div class="container">
    <div class="row footer-color justify-content-between">
        <div class="col-12 footer-top">
            <h3 class="footer-title">Chuseok 2019</h3>
            <h4 class="footer-font">2019 All Rights Reserved</h4>
        </div>
        <div class="col-4">
            <h5 class="footer-category footer-font">About</h5>
            <p>Happy Chuseok! We’ve put together just about everything you’ll need to know to make your Chuseok special. Have a suggestion? Want to chat? Send us a note.</p>
        </div>
        <div class="col-2">
            <h5 class="footer-category footer-font"><span class="footer-color footer-font landing-category--dotted">Traditions</span></h5>
            <ul>
                <li><Link to="/tradition">Customs & Ceremonies</Link></li>
                <li><Link to="/moon-rabbit">The Moon Rabbit</Link></li>
                <li><Link to="/table">Table Setting</Link></li>
            </ul>
        </div>
        <div class="col-2">
            <h5 class="footer-category"><span class="footer-color footer-font landing-category--dotted">Food & Drinks</span></h5>
            <ul>
                <li><Link to="/foods">Chuseok Foods</Link></li>
                <li><Link to="/drinks">Chuseok Drinks</Link></li>
            </ul>
        </div>
        <div class="col-2 footer-bottom">
            <h5 class="footer-category footer-font"><span class="footer-color footer-font landing-category--dotted">Festivities</span></h5>
            <ul>
                <li class="footer-color footer-font"><Link to="#places">Places to Visit</Link></li>
                <li class="footer-color footer-font"><Link to="#media">Shows & Media</Link></li>
                <li class="footer-color footer-font"><Link to="/hanbok">Hanbok</Link></li>
                <li class="footer-color footer-font"><Link to="/gifts">Gifts</Link></li>
                <li class="footer-color footer-font"><Link to="/greetings">Greetings</Link></li>
                <li class="footer-color footer-font"><Link to="/folk-games">Folk Games</Link></li>
            </ul>
        </div>
    </div>
    </div>
</div>
)

export default Footer