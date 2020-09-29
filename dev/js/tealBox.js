
import {gsap} from "gsap";

export function tealBoxAnimation(){

    var tealTimeline = gsap.timeline();
    tealTimeline.from("#square-1",{duration:2, scale:0, rotation:360, ease: "back", alpha:0})
                    .to("#square-1",{duration:1, backgroundColor: "#383838"})
                    .to("#square-1",{duration:1, x: -800, rotation:360, alpha:0, scale:0})
                    .to("#square-1",{duration:0}, "+=1")
                    tealTimeline.repeat( -1 ).yoyo(true).play(); 

    // return tealTimeline;

}