// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

// I think the bug is that we are referencing the recipe object incorrectly.
// We need to use dot notation and indexing to access the ingredients array.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients[0]}
${recipe.ingredients[1]}
${recipe.ingredients[2]}
${recipe.ingredients[3]}`);
