"use strict";

// Elements
const sections = document.querySelectorAll("section");
const footer = document.querySelector("footer");
const nav = document.querySelector("nav");
const prgBars = document.querySelectorAll(".pg");
const skillsDivs = document.querySelectorAll(".skill");
const menuMobile = document.querySelector(".menuMobile");
const sect1 = document.querySelector("#sect1");
const getStartedDiv = document.querySelector(".get-started");
const cover = document.querySelector(".cover");
const clipboardMsg = document.querySelector(".discord-copy-message");

const btnLinkM = document.querySelectorAll(".btnLinkM");
const hideSkillsDiv = document.querySelector(".hide-skills");
const menuBtn = document.querySelector("#menuBtn");
const getStartedBtn = document.querySelector(".get-started-btn");
const discordBtn = document.querySelector("#discordBtn");

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
window.addEventListener("scroll", () =>
  nav.classList.toggle("sticky", window.scrollY > 0)
);

nav.addEventListener("mouseover", hoverNav.bind(0.5));
nav.addEventListener("mouseout", hoverNav.bind(1));

menuBtn.addEventListener("click", () => {
  isMenOpened = !isMenOpened;

  if (isMenOpened) {
    toggle(menuMobile, undefined, "20px", undefined, "100%");
    menuBtn.style.transform = "rotate(90deg)";
  } else {
    toggle(menuMobile, undefined, 0, undefined, 0);
    menuBtn.style.transform = "rotate(0deg)";
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

getStartedBtn.addEventListener("click", () => {
  toggle(getStartedDiv, 1, undefined, "flex");
  toggle(cover, 1, undefined, "block");
});

let msgOpacity;
let msgDisplay;

cover.addEventListener("click", () => {
  toggle(cover, 0, undefined, "none");
  toggle(getStartedDiv, 0, undefined, "none");

  discordBtn.textContent = "Discord";
  clipboardMsg.style.opacity = 0;
  clipboardMsg.style.display = "none";

  clearTimeout(msgOpacity);
  clearTimeout(msgDisplay);
});

discordBtn.addEventListener("click", (e) => {
  e.target.textContent = "EthanPZ#5880";
  navigator.clipboard.writeText(e.target.textContent);
  clipboardMsg.style.display = "block";
  clipboardMsg.style.opacity = 1;

  msgOpacity = setTimeout(() => (clipboardMsg.style.opacity = 0), 3000);
  msgDisplay = setTimeout(() => (clipboardMsg.style.display = "none"), 4000);
});
