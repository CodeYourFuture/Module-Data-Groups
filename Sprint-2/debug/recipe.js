// Predict and explain first...
// prediction before running code: this template literal expression: "${recipe}" won't give the expected results for the "ingredients" part.
// observations after running code: ${recipe}` evaluates to [object Object]. This is because template literal ALONE converts an object into a string with unreadable properties.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves} ingredients:\n${recipe.ingredients.join("\n")}`);
