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

console.log("working");