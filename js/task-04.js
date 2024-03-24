let counterValue = 0;
const counter = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

const increaseClick = () => {
  counterValue += 1;
  counter.textContent = counterValue;
};

const decreaseClick = () => {
  counterValue -= 1;
  counter.textContent = counterValue;
};

incrementBtn.addEventListener("click", increaseClick);
decrementBtn.addEventListener("click", decreaseClick);
