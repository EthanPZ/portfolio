"use strict";

const sections = document.querySelectorAll("section");
const section7 = document.querySelector(".sect--7");

[...sections].forEach((s) => s.classList.add("hidden"));

ScrollReveal().reveal("body", {
  reset: false,
  delay: 500,
});

ScrollReveal().reveal("section", {
  reset: true,
  delay: 170,

  beforeReveal: (el) => {
    if (el.dataset.lazy) {
      el.style.backgroundImage = `url(${section7.dataset.lazy})`;
      el.style.filter = "none";
    }
  },
});

ScrollReveal().reveal(".sect--7", {
  reset: false,
});
