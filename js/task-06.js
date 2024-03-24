const input = document.querySelector("input");
const dataLength = Number(input.getAttribute("data-length"));

input.addEventListener("blur", () => {
  if (input.value.length === dataLength) {
    input.className = "valid";
  } else {
    input.className = "invalid";
  }
});
