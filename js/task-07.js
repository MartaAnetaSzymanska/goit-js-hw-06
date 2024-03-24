const rangeInput = document.querySelector("input");
const spanText = document.querySelector("span");

rangeInput.addEventListener("input", () => {
  spanText.style.fontSize = rangeInput.value + "px";
});
