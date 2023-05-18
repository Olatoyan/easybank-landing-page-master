"use strict";

const header = document.querySelector(".header");
const navOpen = document.querySelector(".nav-open");
const openBtn = document.querySelector(".open-icon");
const closeBtn = document.querySelector(".close-icon");
const navLinks = document.querySelectorAll(".nav__link");

const overlay = document.querySelector(".overlay");

const closeOverlay = function () {
  header.classList.remove("nav-open");
};

openBtn.addEventListener("click", function () {
  header.classList.add("nav-open");
});

navLinks.forEach((navLink) => {
  navLink.addEventListener("click", closeOverlay);
});

closeBtn.addEventListener("click", closeOverlay);
overlay.addEventListener("click", closeOverlay);

let s;
let q;
