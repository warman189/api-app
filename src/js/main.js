import("../utils/utilities.js");

const accountBtn = document.querySelector(".account__button");
const accountSettings = document.querySelector(".account__settings");
const navMenu = document.querySelector(".burger__btn");
const swipeBtn = document.querySelector(".swipe__btn");
const homeBtn = document.querySelector(".foo__nav__home");
const searchBtn = document.querySelector(".foo__nav__search");
const exploreBtn = document.querySelector(".foo__nav__geolocation");
const settingsBtn = document.querySelector(".foo__nav__settings");
const homePage = document.querySelector(".wrapper__home__page");

accountBtn.addEventListener("click", (_) => {
  accountSettings.classList.toggle("account__settings__show");
});

navMenu.addEventListener("click", (_) => {
  document
    .querySelector(".burger__nav__pop__up")
    .classList.toggle("burger__nav__pop__up__show");
});
swipeBtn.addEventListener("click", (_) => {
  let headerInfo = document.querySelector(".wrapper__header");
  headerInfo.classList.toggle("wrapper__header__swipped")
});

homeBtn.addEventListener("click", (_) => {});
searchBtn.addEventListener("click", (_) => {});
exploreBtn.addEventListener("click", (_) => {});
settingsBtn.addEventListener("click", (_) => {});
 