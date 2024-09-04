// Toggle Open & Close Menu Mobile
var openMenuBar = document.querySelector(".navbar-toggle-mobile");
var closeMenuBar = document.querySelector(".navbar-close-mobile");
openMenuBar.addEventListener("click", function () {
  document.querySelector(".navbar").style.transform = "translateX(0%)";
  document.querySelector(".navbar").style.opacity = "1";
});
closeMenuBar.addEventListener("click", function () {
  document.querySelector(".navbar").style.transform = "translateX(100%)";
  document.querySelector(".navbar").style.opacity = "0";
});

// Copy SlideShow Brands
var copyHTMLSlide = document.querySelector(".images-list").cloneNode(true);
document.querySelector(".slideshow-brands").appendChild(copyHTMLSlide);
