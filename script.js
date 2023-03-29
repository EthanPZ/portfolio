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
const hideSkillsDiv = document.querySelector(".hide-skills");

// Functions
function toggle(element, opacity, padding, display, maxHeight) {
  element.style.cssText = `opacity: ${opacity}; display: ${display}; padding: ${padding}; max-height: ${maxHeight};`;
}

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
    // observer.unobserve(entry.target);
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

  if (isMenOpened) {
    toggle(menuMobile, undefined, "20px", undefined, "100%");
    menuBtn.style.transform = "rotate(360deg)";
  } else {
    toggle(menuMobile, undefined, 0, undefined, 0);
    menuBtn.style.transform = "rotate(-360deg)";
  }
});

menuMobile.addEventListener("click", (e) => {
  const link = e.target;
  const siblings = link.closest(".menuMobile").querySelectorAll("h3");
  siblings.forEach((s) => {
    if (s !== link) {
      isMenOpened = !isMenOpened;
      toggle(menuMobile, undefined, 0, undefined, 0);
      menuBtn.style.transform = "rotate(-360deg)";
    }
  });
});

hideSkillsDiv.addEventListener("click", () => {
  toggle(hideSkillsDiv, "0 !important", undefined);
  setTimeout(
    () => toggle(hideSkillsDiv, undefined, undefined, "none !important"),
    500
  );
});
