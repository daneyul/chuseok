import React from "react";
import "../styles/landing.scss";
import "../styles/flowers.scss";

import f1 from "../images/landing/f1.svg"
import f2 from "../images/landing/f2.svg"
import f3 from "../images/landing/f3.svg"
import f4 from "../images/landing/f4.svg"
import f5 from "../images/landing/f5.svg"
import f6 from "../images/landing/f6.svg"
import f7 from "../images/landing/f7.svg"
import f8 from "../images/landing/f8.svg"
import f9 from "../images/landing/f9.svg"
import f10 from "../images/landing/f10.svg"
import f11 from "../images/landing/f11.svg"
import f12 from "../images/landing/f12.svg"
import f13 from "../images/landing/f13.svg"
import f14 from "../images/landing/f14.svg"
import f15 from "../images/landing/f15.svg"
import f16 from "../images/landing/f16.svg"
import f17 from "../images/landing/f17.svg"



const Flowers = () => (
    <div class="landing-flowers" id="scene">
        <div data-depth="0.9"><img src={f1} alt="flower 1" class="f1 rotate"/></div>
        <div data-depth="0.9"><img src={f2} alt="flower 2" class="f2 rotate-opp"/></div>
        <div data-depth="0.7"><img src={f3} alt="flower 3" class="f3 rotate"/></div>
        <div data-depth="0.7"><img src={f4} alt="flower 4" class="f4 rotate-opp"/></div>
        <div data-depth="0.5"><img src={f5} alt="flower 5" class="f5 rotate" /></div>
        <div data-depth="0.5"><img src={f6} alt="flower 6" class="f6 rotate-opp" /></div>
        <div data-depth="0.4"><img src={f7} alt="flower 7" class="f7 rotate" /></div>
        <div data-depth="0.4"><img src={f8} alt="flower 8" class="f8 rotate-opp" /></div>
        <div data-depth="0.5"><img src={f9} alt="flower 9" class="f9 rotate" /></div>
        <div data-depth="0.5"><img src={f10} alt="flower 10" class="f10 rotate-opp" /></div>
        <div data-depth="0.7"><img src={f11} alt="flower 11" class="f11 rotate" /></div>
        <div data-depth="0.7"><img src={f12} alt="flower 12" class="f12 rotate-opp" /></div>
        <div data-depth="0.9"><img src={f13} alt="flower 13" class="f13 rotate" /></div>
        <div data-depth="0.9"><img src={f14} alt="flower 14" class="f14 rotate-opp" /></div>
        <div data-depth="0.7"><img src={f15} alt="flower 15" class="f15 rotate" /></div>
        <div data-depth="0.7"><img src={f16} alt="flower 16" class="f16 rotate-opp" /></div>
        <div data-depth="0.5"><img src={f17} alt="flower 17" class="f17 rotate" /></div>
    </div>
)



export default Flowers
