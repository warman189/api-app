import("../utils/userReg.js");

const outputInner = document.querySelector(".show__pass");
const passInput = document.querySelector(".pass__input");
const modalWindowPass = document.querySelector(".forgot__pass__output");
const btnResPass = document.querySelector(".btn__reset__pass");
const btnResClose = document.querySelector(".close__btn");
const mainLoginPage = document.querySelector(".wrapper__login__page");
const signRegWin = document.querySelector(".sign__reg__values");

// function for show-hide password in input.

outputInner.addEventListener("click", function showHide() {
  if (passInput.getAttribute("type") === "password") {
    passInput.setAttribute("type", "text");
  } else {
    passInput.setAttribute("type", "password");
  }
});

// Reset password Modal Window;

btnResPass.addEventListener("click", function (_) {
  modalWindowPass.classList.toggle("forgot__pass__output__Open");
  modalWindowPass.style.display = "";
});

btnResClose.addEventListener("click", function (_) {
  modalWindowPass.className = "forgot__pass__output";
  modalWindowPass.style.display = "none";
});

// Login IN

document.querySelector(".btn__sumbit").addEventListener("click", function (e) {
  const inputLogin = document.querySelector(".login__input").value;
  const inputPass = document.querySelector(".pass__input").value;
  if (inputLogin === "admin" && inputPass === "admin") {
    window.open("/src/pages/intro.html", "_self");
  } else if ((inputLogin === "" && inputPass === "") || (inputLogin === null && inputPass === null)) return alert("Access denied!");
});

// Google OAuth;

const client = google.accounts.oauth2.initTokenClient({
  client_id:
    "213585262669-1fpaf46nhlaqqhurtts4ve6lggau881k.apps.googleusercontent.com",
  callback: "onTokenResponse",
  scope: "https://www.googleapis.com/auth/documents.readonly",
});
