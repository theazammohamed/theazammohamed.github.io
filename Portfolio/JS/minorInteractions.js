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

console.log("working");