// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};
/* Replacing the for loop with Array.prototype.join() to log the ingredients in a single line, separated by new lines. 
console.log(`${recipe.title} serves ${recipe.serves}`);
for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}
*/
console.log(`${recipe.title} serves ${recipe.serves}`);
console.log (recipe.ingredients.join("\n"));


// The problem is that the code is trying to log out the ingredients using a for...of loop, but it is not using the correct syntax to access the ingredients. The recipe.ingredients is an array, so we need to use a for...of loop to iterate over that array and log each ingredient.