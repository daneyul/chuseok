import { Link, graphql, StaticQuery } from "gatsby";
import React from "react";
import "../styles/footer.scss";
import "../styles/landing.scss";

const Footer = () => (
<div class="footer-bg footer-font">
    <div class="container">
    <div class="row footer-color justify-content-between">
        <div class="col-12 footer-top">
            <a href="/" onClick="window.location.reload();"><h3 class="footer-title footer-color">Chuseok 2019</h3></a>
            <h4 class="footer-font">&copy; 2019 All Rights Reserved <a href="/privacy" class="footer-font footer-color footer-underline footer-link">Privacy Policy</a></h4>
        </div>
        <div class="col-4">
            <h5 class="footer-category footer-font">About</h5>
            <p>Happy Chuseok! We’ve put together just about everything you’ll need to know to make your Chuseok special. Have a suggestion? Want to chat? Send us a note.</p>
        </div>
        <div class="col-2">
            <h5 class="footer-category"><span class="footer-color footer-font landing-category--dotted footer-category">Traditions</span></h5>
            <ul>
                <li><a href="/ceremonies" onClick="window.location.reload();" class="footer-font footer-color footer-link">Customs & Ceremonies</a></li>
                <li><a href="/rabbit" onClick="window.location.reload();" class="footer-font footer-color footer-link">The Moon Rabbit</a></li>
                <li><a href="/table" onClick="window.location.reload();" class="footer-font footer-color footer-link">Table Setting</a></li>
            </ul>
        </div>
        <div class="col-2">
            <h5 class="footer-category"><span class="footer-color footer-font landing-category--dotted footer-category">Food & Drinks</span></h5>
            <ul>
                <li><a href="/foods" onClick="window.location.reload();" class="footer-font footer-color footer-link">Chuseok Foods</a></li>
                <li><a href="/drinks" onClick="window.location.reload();" class="footer-font footer-color footer-link">Chuseok Drinks</a></li>
                <li><a href="/recipes" onClick="window.location.reload();" class="footer-font footer-color footer-link">Chuseok Recipes</a></li>
            </ul>
        </div>
        <div class="col-2 footer-bottom">
            <h5 class="footer-category"><span class="footer-color footer-font landing-category--dotted footer-category">Festivities</span></h5>
            <ul>
                <li><a href="/#places" onClick="window.location.reload();" class="footer-font footer-color footer-link">Places to Visit</a></li>
                <li><a href="/#media" onClick="window.location.reload();" class="footer-font footer-color footer-link">Shows & Media</a></li>
                <li><a href="/hanbok" onClick="window.location.reload();" class="footer-font footer-color footer-link">Hanbok</a></li>
                <li><a href="/gifts" onClick="window.location.reload();" class="footer-font footer-color footer-link">Gifts</a></li>
                <li><a href="/greetings" onClick="window.location.reload();" class="footer-font footer-color footer-link">Greetings</a></li>
                <li><a href="/folk-games" onClick="window.location.reload();" class="footer-font footer-color footer-link">Folk Games</a></li>
            </ul>
        </div>
    </div>
    </div>
</div>
)

export default Footer