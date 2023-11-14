"use strict";

const navLinks = document.querySelector(".nav__links");
const discordIcon = document.querySelector(".discord__icon");
const discordMsg = document.querySelector(".discord__clipboard");

function grayOut(e, opacity) {
  const link = e.target;
  // const check = link.closest(".wrap__resume");

  [...link.closest(".nav__links").children]
    .slice(0, 3)
    .forEach((l) => l !== link && (l.style.opacity = opacity));
}

let setHidden;

function showMsg() {
  clearTimeout(setHidden);

  const discord = "EthanPZ";
  navigator.clipboard.writeText(discord);

  discordMsg.classList.remove("hidden");
  setHidden = setTimeout(() => discordMsg.classList.add("hidden"), 2000);
}

discordIcon.addEventListener("click", showMsg);

navLinks.addEventListener("mouseover", (e) => grayOut(e, 0.5));
navLinks.addEventListener("mouseout", (e) => grayOut(e, 1));

navLinks.addEventListener("click", (e) => {
  const link = e.target;
  link.dataset.scroll
    ? document.querySelector(link.dataset.scroll).scrollIntoView({
        behavior: "smooth",
      })
    : "";
});
