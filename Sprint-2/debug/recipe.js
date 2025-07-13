// Predict and explain first...
// This code is intended to log out the title, how many it serves, and the ingredients of a recipe.
// However, it is not working correctly because the `console.log` statement is trying to log
// the entire `recipe` object directly, which will not format the ingredients as expected.
// Instead, we need to iterate over the `ingredients` array and log each ingredient on a new line.
// To fix this, we can use a template literal to format the output and use `join` to create a string of ingredients separated by new lines.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves} 
ingredients: 
${recipe.ingredients.join('\n')}`);
