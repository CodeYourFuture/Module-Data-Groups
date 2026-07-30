// Predict and explain first...
// The recipe object is interpolated into the template literal (${recipe}).
// During interpolation, JavaScript converts the object to a string.
// Consequently, the object's properties, including the ingredients array, is not displayed.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line.
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}`);
console.log("Ingredients:");

for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}