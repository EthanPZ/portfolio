"use strict";

const navLinks = document.querySelector(".nav__links");
const discordIcon = document.querySelector(".discord__icon");
const discordMsg = document.querySelector(".discord__clipboard");

function grayOut(e, opacity) {
  const link = e.target;

  if (!link.classList.contains("link")) return;

  [...link.closest(".nav__links").children].forEach((l) => {
    if (l !== link) {
      l.style.opacity = opacity;
    }
  });
}

navLinks.addEventListener("mouseover", (e) => grayOut(e, 0.5));
navLinks.addEventListener("mouseout", (e) => grayOut(e, 1));

navLinks.addEventListener("click", (e) => {
  const link = e.target;
  document.querySelector(link?.dataset?.scroll).scrollIntoView({
    behavior: "smooth",
  });
});

let setHidden;

function showMsg() {
  clearTimeout(setHidden);

  const discord = "EthanPZ#5880";
  navigator.clipboard.writeText(discord);

  discordMsg.classList.remove("hidden");
  setHidden = setTimeout(() => discordMsg.classList.add("hidden"), 2000);
}

discordIcon.addEventListener("click", showMsg);
