
import {gsap} from "gsap";

export function redBoxAnimation(){

    var redTimeline = gsap.timeline();
    redTimeline.from("#square-3",{duration:2, scale:0, rotation:360, ease: "back", alpha:0})
                    .to("#square-3",{duration:1, backgroundColor: "#383838"})
                    .to("#square-3",{duration:1, x: 800, rotation:360, alpha:0})
                    .to("#square-1",{duration:0}, "+=1")
                    redTimeline.repeat( -1 ).yoyo(true).play(); 
// console.log(what);
    // return tealTimeline;

}