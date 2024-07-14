const form = document.getElementsByTagName("form").item(0);
console.log(form);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const dataName = e.target.name.value;
  const dataEmail = e.target.email.value;
  const dataPass = e.target.pass.value;

  if (
    dataName === "kominfo_pintar" &&
    dataEmail === "kominfo@gmail.com" &&
    dataPass === "Admin1234"
  ) {
    window.alert("Lanjut bang!");
    window.location = "/";
  } else {
    window.alert("Nice try, coba lagi");
  }
  form.reset();
});
