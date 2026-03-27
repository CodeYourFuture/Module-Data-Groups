const ingredients = ["olive oil", "tomatoes", "garlic", "onion", "carrot"];
let ingredientsCopy = ingredients;
ingredientsCopy.push("pasta", "salt", "pepper");
const otherRecipe = [
  "olive oil",
  "tomatoes",
  "garlic",
  "onion",
  "carrot",
  "pasta",
  "salt",
  "pepper",
];

console.log(ingredients === ingredientsCopy);
console.log(ingredients === otherRecipe);
console.log(otherRecipe === ingredientsCopy);
console.log(otherRecipe.length === ingredients.length);

