// Predict and explain first...
// the ingredients wont be printed at all because the we didnt call it correctly

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// by typing recipe.ingredients

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["\nolive oil", "tomatoes\n", "salt\n", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves} ${recipe.ingredients}`);
