// Predict and explain first...
// I think it incorrectly tries to log ingredients - this should be an array,
// but there's missed .ingredients after the object name, so it will likely log something like "[object Object]" instead of the actual ingredients.

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
${recipe.ingredients.join(", ")}`);
