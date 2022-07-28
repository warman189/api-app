// написать функцию для регистрации пользователя.
let userLogin = document.querySelector(".sign__user__login");
let userMail = document.querySelector(".sign__user__email");
let userPass = document.querySelector(".sign__user__password");
let userPassConfirm = document.querySelector(".sign__user__conf__password");

document.querySelector(".sign__registration").addEventListener("click", (_) => {
  signRegWin.style.display = "";
  document.querySelector(".reg__btn").onclick = function sumbitReg() {
    if (
      (userLogin.value === "" &&
        userMail.value === "" &&
        userPass.value === "" &&
        userPassConfirm.value === "") ||
      (userLogin.value === null &&
        userMail.value === null &&
        userPass.value === null &&
        userPassConfirm.value === null)
    ) {
      return alert("Empty values!");
    } else if (userPass.value !== userPassConfirm.value) {
      return alert("Wrong password!");
    } else {
      signRegWin.style.display = "none";
      return alert("Registration is completed!");
    }
  };
});
