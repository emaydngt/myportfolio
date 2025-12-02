(function () {
  const curve = document.getElementById("curve");
  const defaultCurveY = 350; // original curve control height
  const curveRate = 3;

  function updateCurve(scrollPos) {
    const svg = curve.parentElement;
    const width = 800; // matches viewBox width
    const height = 400; // matches viewBox height

    // start & end points
    const startX = 0;
    const startY = 300;
    const endX = width;
    const endY = 300;

    // control point (centered)
    const controlX = width / 2;
    const controlY = defaultCurveY - scrollPos / curveRate;

    // update path
    curve.setAttribute(
      "d",
      `M${startX},${startY} Q${controlX},${controlY} ${endX},${endY} L${endX},0 L${startX},0 Z`
    );
  }

  // scroll listener
  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    requestAnimationFrame(() => updateCurve(scrollPos));
  });

  // initialize path on load
  updateCurve(0);
})();

  feather.replace()



document.addEventListener("DOMContentLoaded", () => {
const hamburger = document.querySelector(".hamburger");
const menu = document.getElementById("menu");
const blurBg = document.getElementById("blur-bg");

hamburger.addEventListener("click", () => {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    blurBg.style.display = "block";  // show blur
  } else {
    blurBg.style.display = "none";   // hide blur
  }


  });

  // close menu on scroll
  window.addEventListener("scroll", () => {
    menu.classList.remove("active");
     blurBg.style.display = "none";   // hide blur
  });

});




