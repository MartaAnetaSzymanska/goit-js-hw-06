const rangeInput = document.querySelector("input");
const spanText = document.querySelector("span");

const initialFontSize = rangeInput.value + "px";
spanText.style.fontSize = initialFontSize;

rangeInput.addEventListener("input", () => {
  spanText.style.fontSize = rangeInput.value + "px";
});
