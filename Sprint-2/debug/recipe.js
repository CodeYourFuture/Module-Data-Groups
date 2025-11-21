// Predict and explain first...

// The console will print the recipe title, serves and the recipe object itself rather than the actual ingredient

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(
  `titie: ${recipe.title}, serves: ${
    recipe.serves
  }, ingredients: ${recipe.ingredients.join(", ")}`
);
