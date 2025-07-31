// Predict and explain first...
// We do not receive the ingredients because it doesn't mention after recipe. it should be ==> recipe.ingredients
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};
const objValues = Object.values(recipe.ingredients);

console.log(`${recipe.title} serves ${recipe.serves} ingredients: `);
for (const oValues of objValues) console.log(oValues);
