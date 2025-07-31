// Predict and explain first...
// I think this code will log out the title, how many it serves, and the ingredients.
// However, it will not log each ingredient on a new line because the `recipe` object

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// The code is not correctly logging the ingredients on separate lines.
// To fix this, we can use `join('\n')` on the ingredients array to format them correctly.
// Additionally, we need to ensure that the template literal is formatted correctly.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join('\n')}`);
// This code will now correctly log the title, number of servings, and each ingredient on a new line.