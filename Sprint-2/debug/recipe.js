// Predict and explain first... it won't work because the ingredients are not being accessed correctly.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
ingredients are:`);
recipe.ingredients.forEach((ingredient) => {
  console.log(ingredient);
});