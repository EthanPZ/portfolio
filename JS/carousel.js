"use strict";

class Carousel {
  #elements = [...document.querySelectorAll(".card")];
  #firstEl = this.#elements[0];
  #tempEl;

  constructor() {
    document
      .querySelector(".slide-next")
      .addEventListener("click", this._switch.bind(this));
    document
      .querySelector(".slide-prev")
      .addEventListener("click", this._switch.bind(this));
  }

  _rearrangeArr() {
    this.#tempEl = this.#firstEl;
    this.#elements.shift(this.#firstEl);
    this.#elements.push(this.#tempEl);
    this.#firstEl = this.#elements[0];
  }

  _switch() {
    this.#firstEl.classList.remove("current__card");
    this.#firstEl.classList.add("next__card");

    this._rearrangeArr();
    this._nextCard();
  }

  _nextCard() {
    this.#firstEl.classList.remove("next__card");
    this.#firstEl.classList.add("current__card");
  }
}

const carousel = new Carousel();
