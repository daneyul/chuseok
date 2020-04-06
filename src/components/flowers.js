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
import c1 from "../images/landing/c1.svg"
import c2 from "../images/landing/c2.svg"
import c3 from "../images/landing/c3.svg"
import c4 from "../images/landing/c4.svg"


const Flowers = () => (
    <React.Fragment>
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
        <div><img src={c1} alt="circle 1" class="c1 rotate-in-2-cw" /></div>
        <div><img src={c2} alt="circle 2" class="c2 rotate-in-2-cw" /></div>
        <div><img src={c3} alt="circle 3" class="c3 rotate-in-2-cw" /></div>
        <div><img src={c4} alt="circle 4" class="c4 rotate-in-2-cw" /></div>
    </React.Fragment>
)



export default Flowers
