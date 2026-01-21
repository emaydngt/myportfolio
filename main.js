(function () {
  const curve = document.getElementById("curve");
  const defaultCurveY = 350;
  const curveRate = 3;

  function updateCurve(scrollPos) {
    const svg = curve.parentElement;
    const width = 800;
    const height = 400;


    const startX = 0;
    const startY = 300;
    const endX = width;
    const endY = 300;


    const controlX = width / 2;
    const controlY = defaultCurveY - scrollPos / curveRate;


    curve.setAttribute(
      "d",
      `M${startX},${startY} Q${controlX},${controlY} ${endX},${endY} L${endX},0 L${startX},0 Z`
    );
  }


  window.addEventListener("scroll", () => {
    const scrollPos = window.scrollY;
    requestAnimationFrame(() => updateCurve(scrollPos));
  });


  updateCurve(0);
})();

feather.replace();

const pText = document.querySelector("#article1 p");
const imgEl = document.querySelector("#image");
const section = document.querySelector("#container1");

const mq = window.matchMedia("(max-width: 600px)");

function scrubScroll() {
  const rect = section.getBoundingClientRect();
  const windowH = window.innerHeight;

  let progress;

  if (mq.matches) {
    // ⭐ MOBILE — short viewport → bigger divisor para umabot sa 1
    progress = (windowH - rect.top) / (windowH * 1.2);
  } else {
    // ⭐ DESKTOP — long viewport → smaller divisor
    progress = (windowH - rect.top) / (windowH * 0.9);
  }

  // clamp 0–1
  progress = Math.min(Math.max(progress, 0), 1);

  // offsets (same)
  const textOffset = -100 + progress * 100;
  const imgOffset = 100 - progress * 100;

  pText.style.opacity = progress;
  imgEl.style.opacity = progress;

  pText.style.transform = `translateX(${textOffset}px)`;
  imgEl.style.transform = `translateX(${imgOffset}px)`;
}

window.addEventListener("scroll", scrubScroll);
scrubScroll();



document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const menu = document.getElementById("menu");
  const blurBg = document.getElementById("blur-bg");
  const mq = window.matchMedia("(max-width: 600px)");

mq.addEventListener("change", () => {
    if (mq.matches) {
        
    } else {
        blurBg.style.display = "none";
        menu.classList.remove("active");
    }
});



  hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {
      blurBg.style.display = "block";
    } else {
      blurBg.style.display = "none";
    }


  });


  window.addEventListener("scroll", () => {
    menu.classList.remove("active");
    blurBg.style.display = "none";
  });

});



