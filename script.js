"use strict";

// Elements
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");
const nav = document.querySelector("nav");
const prgBars = document.querySelectorAll(".pg");
const skillsDivs = document.querySelectorAll(".skill");
const menuBtn = document.querySelector("#menuBtn");
const menuMobile = document.querySelector(".menuMobile");
const btnLinkM = document.querySelectorAll(".btnLinkM");

// Functions
function hoverNav(e) {
  if (e.target.classList.contains("link")) {
    const link = e.target;
    const siblings = e.target.closest("nav").querySelectorAll(".link");

    siblings.forEach((s) => {
      if (s !== link) s.style.opacity = this;
    });
  }
}

const observer = new IntersectionObserver(
  (entries) => {
    const [entry] = entries;
    entry.target.classList.toggle("hidden", !entry.isIntersecting);

    if (entry.isIntersecting) entry.target.classList.add("scroll");
    observer.unobserve(entry.target);
  },
  {
    // rootMargin: "100px",
    threshold: 0.2,
  }
);

sections.forEach((s) => {
  s.classList.add("space");
  s.classList.add("hidden");
  observer.observe(s);
});

// Handlers Variables
let isMenOpened = false;

// Event Handlers
nav.addEventListener("mouseover", hoverNav.bind(0.5));
nav.addEventListener("mouseout", hoverNav.bind(1));

menuBtn.addEventListener("click", () => {
  isMenOpened = !isMenOpened;

  if (isMenOpened) menuMobile.style.display = "flex";
  else menuMobile.style.display = "none";
});

menuMobile.addEventListener("click", (e) => {
  const link = e.target;
  const siblings = link.closest(".menuMobile").querySelectorAll("h3");
  siblings.forEach((s) => {
    if (s !== link) {
      isMenOpened = !isMenOpened;
      menuMobile.style.display = "none";
    }
  });
});
