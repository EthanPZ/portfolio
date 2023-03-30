"use strict";

const loaderWrapper = document.querySelector(".loader");
////////////////////////////////////////////////////////

function loaderOut(opacity, overflow, display) {
  loaderWrapper.style.opacity = opacity;
  document.documentElement.style.overflow = overflow;

  loaderWrapper.style.display = display;
}

loaderOut(undefined, "hidden", "flex");

setTimeout(() => {
  loaderOut(0, "visible");
}, 2000);

setTimeout(() => loaderOut(undefined, undefined, "none"), 2200);
