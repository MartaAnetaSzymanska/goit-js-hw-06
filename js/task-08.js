const registerForm = document.querySelector("form");
const results = {};
registerForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
    return console.log("please fill in all the fields");
  }
  results.email = email;
  results.password = password;
  console.log(results);
  form.reset();
}
