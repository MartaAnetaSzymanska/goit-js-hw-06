const numberOfCats = document.querySelectorAll("h2");
console.log("Number of Categories:", numberOfCats.length);

for (let i = 0; i < 3; i += 1) {
  const catName = document.querySelectorAll("h2");
  console.log("Category:", catName[i].textContent);
  const itemList = document.querySelectorAll("ul");
  console.log("Elements:", itemList[i].children.length);
}
