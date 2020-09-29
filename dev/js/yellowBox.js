import {gsap} from "gsap";

export function yellowBoxAnimation(){

    var yellowTimeline = gsap.timeline();
    yellowTimeline.from("#square-2",{duration:2, scale:0, rotation:360, ease: "back", alpha:0})
                    .to("#square-2",{duration:1, backgroundColor: "#383838"})
                    .to("#square-2",{duration:1,rotation:360, scale:6}, "+=1")
                    yellowTimeline.repeat( -1 ).yoyo(true).play(); 

    // return tealTimeline;

}