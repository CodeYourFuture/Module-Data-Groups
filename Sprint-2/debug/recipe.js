// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

// const recipe = {
//   title: "bruschetta",
//   serves: 2,
//   ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
// };

// console.log(`${recipe.title} serves ${recipe.serves}`);

// let ingredients = recipe["ingredients"];

// for (let i = 0; i < ingredients.length; i++) {
//   console.log(ingredients[i]);
// }

// ==================== one  line with join method ====================

console.log(`${recipe.title} serves ${recipe.serves}`);

// Display the ingredients in one line with a new line (\n) between each ingredient
console.log(recipe.ingredients.join("\n"));
