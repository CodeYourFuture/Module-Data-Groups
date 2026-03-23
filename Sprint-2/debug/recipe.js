// Predict and explain first...
// `recipe` is an object. `${recipe}` prints [object Object], not the ingredients.
// To log ingredients, loop over `recipe.ingredients` or join them into a string.
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
ingredients:`);

for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}
