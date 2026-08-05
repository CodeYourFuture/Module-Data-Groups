// Predict and explain first...
//We could use a for in loop to print all the ingredients
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
for (let i in recipe.ingredients) {
  console.log(`${recipe.ingredients[i]}`);
}
