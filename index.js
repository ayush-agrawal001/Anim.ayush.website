 import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var timeout;

function mouseFollower() {
    window.addEventListener('mousemove', function(dets) {
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale}, ${yscale})`;
    });
}

function circleChapta(){
    clearTimeout(timeout);
    var xprev = 0;
    var yprev = 0;
    window.addEventListener("mousemove" , function(dets){
    var xdiff = dets.clientX - xprev;
    var ydiff = dets.clientY - yprev;

    xprev = dets.clientX
    yprev = dets.clientY
    xscale = gsap.utils.clamp(.6, 1.5, xdiff)
    yscale = gsap.utils.clamp(.6, 1.5, ydiff)
    mouseFollower(xscale, yscale)
    timeout = this.setTimeout(function(){
        document.querySelector("#minicircle").style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
    }, 50)
    }
    )
}




function firstPageAnim(){
    var tl = gsap.timeline();
    
    tl.from("#nav" ,{
        y: '-10',
        opacity: 0,
        duration: 1,
        ease: Expo.easeInOut
    })
    tl.to(".boardelem", {
        y: "0",
        ease: Expo.easeInOut,
        duration: 0.8
        ,
        stagger: .2,
    })
    tl.from("#headfooter" ,{
        y:10,
        opacity:0,
        duration: 1,

    })
}

firstPageAnim();
mouseFollower(); 
circleChapta();


document.querySelectorAll(".elem").forEach(function(elem){
    var rotate = 0;
    var diffrotate = 0;

    elem.addEventListener("mousemove" , function(dets){
        var diffY = dets.clientY - elem.getBoundingClientRect().y;
        diffrotate = dets.clientX - rotate;
        rotate = dets.clientX;    
        gsap.to(elem.querySelector("img"), {
            opacity:1,
            ease: "power1",
            Y: diffY,
            left:dets.clientX,
            
            rotate: (-20, 20, diffrotate)
        })
    })
    elem.addEventListener("mouseleave" , function(dets){        
        gsap.to(elem.querySelector("img"), {
            opacity:0,
            ease: "power3",
        })
    })
})









