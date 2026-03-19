// Predict and explain first...
// The template literal ${recipe} attempts to convert the entire object to a string.
// Because objects aren't strings, it will log: "[object Object]".
// It also fails to access the specific 'ingredients' array or loop through them.
// The result will be one confusing line instead of a formatted list.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}`);
console.log(" ingredients:");

for (const ing of recipe.ingredients) {
  console.log(` - ${ing}`);
}
