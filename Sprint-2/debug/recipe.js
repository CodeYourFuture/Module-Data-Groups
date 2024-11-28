// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`Title: ${recipe.title}\nServes: ${recipe.serves}\nIngredients:`);
recipe.ingredients.forEach((ingredient) => console.log(ingredient));

// We need to use forEach method to iterate over an array
