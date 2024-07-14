const signup = document.getElementById("auth-signup");
console.log(signup);

signup.addEventListener("submit", (e) => {
  e.preventDefault();
  const signUpName = e.target.fullname.value;
  const signUpEmail = e.target.emailsign.value;
  const signUpPass = e.target.signpass.value;
  const signUpConfirm = e.target.signconfirm.value;

  if (
    signUpName === "miakhalifa" &&
    signUpEmail === "miakhalifa@gmail.com" &&
    signUpPass === "emprit69" &&
    signUpConfirm === signUpPass
  ) {
    window.alert("Create an account success");
    window.location = "/";
  } else {
    window.alert("Wrong data");
  }
  signup.reset();
});
