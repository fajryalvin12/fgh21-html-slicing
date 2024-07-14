const forgotForm = document.getElementById("auth-forgot");
console.log(forgotForm);
forgotForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const checkEmail = e.target.check.value;

  if (checkEmail === "kominfo@gmail.com") {
    window.alert("Proceed to change password first");
    window.location = "/change-password.html";
  }
});
