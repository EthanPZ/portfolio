"use strict";

const projectContainer = document.querySelector(".work__wrapper");
const project = document.querySelector(".project");

const projects = {
  1: {
    img: "./Imgs/Portfolio.png",
    name: "My Portfolio",
    link: "https://ethanpz.netlify.app/",
    desc: "Modern & minimal portfolio for all the information about me and my work.",
  },

  2: {
    img: "./Imgs/FvOrGvwWAAInLJq.jpg",
    name: "mapty",
    link: "https://mapty-projectt.netlify.app/",
    desc: "Map all your workouts easily!",
  },

  3: {
    img: "./Imgs/hofesh-il.png",
    name: "HofeshIL",
    link: "https://hofesh-il.netlify.app/",
    desc: "Easily find out when there's a certain Israeli / Jewish holiday. (Currently only in Hebrew)",
  },
};

for (let obj in projects) {
  const html = `
    <figure class="project">
    <img src="${projects[obj].img}" alt="project" />
    <a href="${projects[obj].link}" target="_blank"><h3>${projects[obj].name}</h3></a>
    <p>
      ${projects[obj].desc}
    </p>
  </figure>
    `;

  projectContainer.insertAdjacentHTML("beforeend", html);
}
