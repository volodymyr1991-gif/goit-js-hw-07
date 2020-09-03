const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const ul = document.querySelector("#ingredients");
const potato = document.createElement("li");
potato.textContent = ingredients[0];
potato.classList.add("ingredients-potato");

const mushrooms = document.createElement("li");
mushrooms.textContent = ingredients[1];
mushrooms.classList.add("ingredients-mushrooms");

const garlic = document.createElement("li");
garlic.textContent = ingredients[2];
garlic.classList.add("ingredients-garlic");

const tomatoes = document.createElement("li");
tomatoes.textContent = ingredients[3];
tomatoes.classList.add("ingredients-tomatoes");

const green = document.createElement("li");
green.textContent = ingredients[4];
green.classList.add("ingredients-green");

const prepare = document.createElement("li");
prepare.textContent = ingredients[5];
prepare.classList.add("ingredients-prepare");

ul.append(potato, mushrooms, garlic, tomatoes, green, prepare);
