document.querySelector(".menu").addEventListener("click", function() {
  document.querySelector(".center").classList.toggle("slide-in");
});
document.querySelector(".close").addEventListener("click", function() {
  document.querySelector(".center").classList.replace("slide-in", "slide-out");
});
