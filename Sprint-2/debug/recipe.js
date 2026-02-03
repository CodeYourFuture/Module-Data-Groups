// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}\ningredients:`);
recipe.ingredients.forEach((ingredient) => console.log(ingredient));

// everything is logged on one line
// console.log is logging the recipe object array as a whole
// instead of each value of ingredients array
// the ingredients array must be logged using a loop
