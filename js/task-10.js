function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector("input");
const createBtn = document.querySelector("[data-create");
const destroyBtn = document.querySelector("[data-destroy]");
const parentBox = document.querySelector("#boxes");
let amount = 0;
let boxWidth = 20;
let boxHeight = 20;

input.addEventListener("change", setAmount);

function setAmount(event) {
  amount = event.currentTarget.value;
}

function createBoxes() {
  for (let i = 0; i < amount; i++) {
    const elem = document.createElement("div");
    boxWidth += 10;
    boxHeight += 10;
    elem.style.width = boxWidth + "px";
    elem.style.height = boxHeight + "px";
    elem.style.backgroundColor = getRandomHexColor();
    parentBox.append(elem);
  }
}

function destroyBoxes() {
  parentBox.innerHTML = "";
  boxWidth = 20;
  boxHeight = 20;
}

createBtn.addEventListener("click", createBoxes);
destroyBtn.addEventListener("click", destroyBoxes);
