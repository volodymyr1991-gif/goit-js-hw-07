const ingredients = [
  "Картопля",
  "Гриби",
  "Часник",
  "Помідори",
  "Зелень",
  "Приправи",
];

const creatIngredience = (ingredient) => {
  const liRef = document.createElement("li");
  liRef.textContent = ingredient;
  liRef.classList.add("ingredients-potato");

  return liRef;
};

const ingredientsCard = ingredients.map((ingredient) =>
  creatIngredience(ingredient)
);
console.log(ingredientsCard);
const IngredientListsRef = document.querySelector("#ingredients");
IngredientListsRef.append(...ingredientsCard);
