
// console.log(Homework);
import {gsap} from "gsap";

import {tealBoxAnimation} from "./tealBox.js"
import {yellowBoxAnimation} from "./yellowBox.js"
import {redBoxAnimation} from "./redBox.js"


const mainTL = gsap.timeline({paused:true});
// var mainTL = gsap.timeline();
        mainTL.add(tealBoxAnimation())
    
        .add(yellowBoxAnimation(), "+=4")

        .add(redBoxAnimation(), "+=2")

        .play();