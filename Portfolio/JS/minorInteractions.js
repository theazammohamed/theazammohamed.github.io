const aboutBtn = document.querySelectorAll(".aboutBtn");

aboutBtn.forEach((aboutBtn) => {
  const aboutHover = gsap.timeline({ paused: true })
  .to(aboutBtn.querySelector("a"), { 
      duration: 0.3, 
      textDecoration: "underline",
      ease: "power2.inOut" 
  })
  .to(aboutBtn.querySelector("svg"), { 
      duration: 0.3, 
      x: "3px",
      y: "-3px",
      ease: "power2.inOut"
  }, "<");

  aboutBtn.addEventListener("mouseenter", () => aboutHover.play());
  aboutBtn.addEventListener("mouseleave", () => aboutHover.reverse());
})


// Landing Page SVGS >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
const landingSVG = document.querySelectorAll(".description .svgs svg");

landingSVG.forEach((landingSVG) => {
  const landingSVGHover = gsap.timeline({paused: true});

  const svgPaths = landingSVG.querySelectorAll("svg path.linkTransition");

  svgPaths.forEach((path) => {
    landingSVGHover.to(path, {
      duration: 0.3,
      scale: 1.06,
      fill: "#0D0D0D",
      ease: "power2.inOut" 
    });
  });

  landingSVG.addEventListener("mouseenter", () => landingSVGHover.play());
  landingSVG.addEventListener("mouseleave", () => landingSVGHover.reverse());
});

// Navbar Entry
gsap.from(".navbar li", {y: 360, scale: 0, opacity: 0.5, duration: 0.8, delay:0.1, stagger: 0.2})

// Landing Section Entry
gsap.from("#heroSection", {opacity: 0, duration: 2})


// Navbar Open / Close
const openNav = document.querySelector(".mobileNav svg");
const closeNav = document.querySelector(".navSlide .closeBtn")

var open = gsap.timeline({duration: 0.1});

open.paused(true)
    .to(".navSlide", {xPercent: -100, duration: 0.5 ,ease:"expo.out"})
    .from(".slideNavbar li", {x: 100, opacity: 0, stagger: 0.1})
    .from(".navSlide .svgs a", {opacity: 0, stagger: 0.1})

openNav.addEventListener("click", () => {
    open.timeScale(1);
    open.play();
})

closeNav.addEventListener ("click", () => {
    open.timeScale(4).reverse();
})


// Marquee test
let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap.to(".marquee__part", {xPercent: -100, repeat: -1, duration: 10, ease: "linear"}).totalProgress(0.5);

let tweenCombi = gsap.to(".marquee__part__combi", {xPercent: 100, repeat: -1, duration: 10, ease: "linear"}).totalProgress(0.5);

gsap.set(".marquee__inner", {xPercent: -50});

gsap.set(".marquee__inner__combi", {xPercent: -50});

window.addEventListener("scroll", function(){
  
  if ( window.pageYOffset > currentScroll ) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }
   
  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1
  });
  
  gsap.to(tweenCombi, {
    timeScale: isScrollingDown ? 1 : -1
  });
  

  currentScroll = window.pageYOffset
});

// Lenis Smooth Scrolling

// const lenis = new Lenis()

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

// do some basic animations on text and stuff

// Splash screen?


