const aboutBtn = document.querySelector(".aboutBtn");
const aboutBtnText = document.querySelector(".aboutBtn a");
const aboutBtnSVGPath = document.querySelector(".aboutBtn svg path");
const aboutBtnSVG = document.querySelector(".aboutBtn svg");

aboutBtn.addEventListener('mouseover', () => {
    aboutBtnSVGPath.setAttribute("fill", "#F2F2F2");
    aboutBtnText.style.color = 'white';
    aboutBtnText.style.textShadow = "2px 2px 1px rgba($black, 100%)";
    aboutBtnSVG.classList.add("aboutBtnSVGRotate");
});

aboutBtn.addEventListener('mouseleave', () => {
    aboutBtnSVGPath.setAttribute("fill", "#000000")
    aboutBtnText.style.color = 'black';
    aboutBtnSVG.classList.remove("aboutBtnSVGRotate")
})

gsap.from(".navbar li", {y: 360, scale: 0, opacity: 0.5, duration: 0.8, delay:1.5, stagger: 0.2})

gsap.from("#heroSection", {scale: 0.8, duration: 1.5})



























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


// Gemini Marquee test
let currentScroll = 0;
let isScrollingDown = true;

let tween = gsap.to(".marquee__part", {xPercent: -100, repeat: -1, duration: 10, ease: "linear"}).totalProgress(0.5);

gsap.set(".marquee__inner", {xPercent: -50});

window.addEventListener("scroll", function(){
  
  if ( window.pageYOffset > currentScroll ) {
    isScrollingDown = true;
  } else {
    isScrollingDown = false;
  }
   
  gsap.to(tween, {
    timeScale: isScrollingDown ? 1 : -1
  });
  
  currentScroll = window.pageYOffset
});
