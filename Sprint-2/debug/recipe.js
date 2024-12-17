// Predict and explain first...
    // the last variable in the template literal, ${recipe}, will return an objecy and not the ingredients.
    // The variable is referring to the entire object not the specific item.

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
${recipe.ingredients}`);