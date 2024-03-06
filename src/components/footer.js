import React from "react";
import "../styles/footer.scss";
import "../styles/landing.scss";

const Footer = () => (
<div class="footer-bg footer-color">
    <div class="container">
    <div class="row justify-content-lg-between flex-wrap">
        <div class="col-12 footer-top">
            <h3 class="footer-title">Chuseok 4</h3>
            <h4 class="footer-font">&copy; 2024 All Rights Reserved <a href="/privacy-policy" class="footer-font footer-color footer-underline footer-link">Privacy Policy</a></h4>
        </div>
        <div class="col-sm-12 col-lg-4 mb-5">
            <h5 class="footer-category">About</h5>
            <p class="footer-font">Happy Chuseok! We’ve put together just about everything you’ll need to know to make your Chuseok special. Have a suggestion? Want to chat? <a href="mailto:hangawi@chuseok.info" class ="footer-font footer-link" target="_blank" rel="noopener noreferrer">Send us a note.</a></p>
            <h5 class="mt-5"><span class="footer-category">Partner Sites</span></h5>
            <ul class="footer-font">
                <li><a href="https://archdictionary.com" onClick="window.location.reload();" class="footer-font footer-color footer-link">Architecture Dictionary</a></li>
                <li><a href="https://concretecalculator.tools" onClick="window.location.reload();" class="footer-font footer-color footer-link">Concrete Calculator</a></li>
            </ul>
        </div>
        <div class="col-6 col-lg-2">
            <h5><span class="footer-category">Traditions</span></h5>
            <ul class="footer-font">
                <li><a href="/customs" onClick="window.location.reload();" class="footer-font footer-color footer-link">Customs</a></li>
                <li><a href="/rabbit" onClick="window.location.reload();" class="footer-font footer-color footer-link">The Moon Rabbit</a></li>
                <li><a href="/table" onClick="window.location.reload();" class="footer-font footer-color footer-link">Table Setting</a></li>
            </ul>
        </div>
        <div class="col-6 col-lg-2">
            <h5><span class="footer-category">Food & Drinks</span></h5>
            <ul class="footer-font">
                <li><a href="/foods" onClick="window.location.reload();" class="footer-font footer-color footer-link">Chuseok Foods</a></li>
                <li><a href="/drinks" onClick="window.location.reload();" class="footer-font footer-color footer-link">Chuseok Drinks</a></li>
                <li><a href="/recipes" onClick="window.location.reload();" class="footer-font footer-color footer-link">Chuseok Recipes</a></li>
            </ul>
        </div>
        <div class="col-6 col-lg-2 footer-bottom">
            <h5><span class="footer-category">Festivities</span></h5>
            <ul class="footer-font">
                <li><a href="/places" onClick="window.location.reload();" class="footer-font footer-color footer-link">Places to Visit</a></li>
                <li><a href="/media" onClick="window.location.reload();" class="footer-font footer-color footer-link">Shows & Media</a></li>
                <li><a href="/hanbok" onClick="window.location.reload();" class="footer-font footer-color footer-link">Hanbok</a></li>
                <li><a href="/gifts" onClick="window.location.reload();" class="footer-font footer-color footer-link">Gifts</a></li>
                <li><a href="/greetings" onClick="window.location.reload();" class="footer-font footer-color footer-link">Greetings</a></li>
                <li><a href="/games" onClick="window.location.reload();" class="footer-font footer-color footer-link">Folk Games</a></li>
            </ul>
        </div>
    </div>
    </div>
</div>
)

export default Footer
