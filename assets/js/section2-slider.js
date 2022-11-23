// var leftArrowSlider = document.getElementsByClassName(
//   "section2-slider-arrows-left"
// )[0];
// var rightArrowSlider = document.getElementsByClassName(
//   "section2-slider-arrows-right"
// )[0];
// var canvasSlider = document.getElementsByClassName("section2-slider-canvas")[0];
// var pageLengthSlider = 1000;
// var currentPageSlider = 0;

// var sliderMove = function (direction) {
//   console.log("fdijndjs");
//   if ((direction = "left")) {
//     canvasSlider.style.transform = `translateX(calc(-${
//       pageLengthSlider * currentPageSlider
//     } * var(--desktopProportions)))`;
//   }
// };

// leftArrowSlider.addEventListener("click", sliderMove("left"));

var arrowL = document.getElementsByClassName("section2-slider-arrows-left")[0];
var arrowR = document.getElementsByClassName("section2-slider-arrows-right")[0];
var fogL = document.getElementsByClassName("section2-slider-gradientstart")[0];
var fogR = document.getElementsByClassName("section2-slider-gradientend")[0];
var picwidth = 1000;
var piclength = 0;
var canvas = document.getElementsByClassName("section2-slider-canvas")[0];
var picsCount = 3;
var maxpiclength = picwidth * (picsCount - 1);
var arrowsTransitionDuration = 300;

arrowL.style.transition = `${arrowsTransitionDuration}ms ease`;
arrowR.style.transition = `${arrowsTransitionDuration}ms ease`;

arrowL.addEventListener("click", previous);
arrowR.addEventListener("click", next);

// arrowR.style.marginLeft = `${picwidth}px - ${arrowL.style.width - arrowR.style.width - arrowL.style.marginLeft - arrowR.style.marginRight}`;

canvas.style.transform = `translateX(0)`;

function next() {
  piclength = piclength - picwidth;
  canvas.style.transform = `translateX(calc(${piclength} * var(--desktopProportions))`;
  updateFog();
  updateArrows();
}

function previous() {
  piclength = piclength + picwidth;
  canvas.style.transform = `translateX(calc(${piclength} * var(--desktopProportions))`;
  updateFog();
  updateArrows();
}

var updateFog = function () {
  if (piclength == 0) {
    fogL.style.opacity = 0;
    fogR.style.opacity = 1;
  } else if ((piclength !== 0) & (piclength !== -maxpiclength)) {
    fogL.style.opacity = 1;
    fogR.style.opacity = 1;
  } else if (piclength == -maxpiclength) {
    fogL.style.opacity = 1;
    fogR.style.opacity = 0;
  }
};

var updateArrows = function () {
  if (piclength == 0) {
    arrowL.style.opacity = 0;
    setTimeout(() => {
      arrowL.style.display = "none";
    }, 800);
    arrowR.style.display = "block";
    setTimeout(() => {
      arrowR.style.opacity = 1;
    }, 100);
  } else if ((piclength !== 0) & (piclength !== -maxpiclength)) {
    arrowL.style.display = "block";
    setTimeout(() => {
      arrowL.style.opacity = 1;
    }, 100);
    arrowR.style.display = "block";
    setTimeout(() => {
      arrowR.style.opacity = 1;
    }, 100);
  } else if (piclength == -maxpiclength) {
    arrowL.style.display = "block";
    setTimeout(() => {
      arrowL.style.opacity = 1;
    }, 100);
    arrowR.style.opacity = 0;
    setTimeout(() => {
      arrowR.style.display = "none";
    }, 800);
  }
};
