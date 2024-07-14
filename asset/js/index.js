const btnLogin = document.getElementById("btn-login");
const btnSignup = document.getElementById("btn-signup");
console.log(btnLogin);

btnLogin.onclick = () => {
  window.location = "./login.html";
};
btnSignup.onclick = () => {
  window.location = "./signup.html";
};
