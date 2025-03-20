// Predict and explain first...

// Putting recipe in the template string shows a default object text instead of its data.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  Ingredients:
  ${recipe.ingredients.join('\n')}`);
  