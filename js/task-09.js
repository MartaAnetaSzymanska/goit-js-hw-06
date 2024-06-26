function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const btn = document.querySelector("button");
const span = document.querySelector("span");

btn.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  span.innerHTML = getRandomHexColor();
});
