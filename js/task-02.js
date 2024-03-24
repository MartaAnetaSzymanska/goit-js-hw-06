const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

for (const ingredient of ingredients) {
  const elem = document.createElement("li");
  elem.innerText = ingredient;
  elem.classList.add("item");
  list.append(elem);
}
console.log(list);
