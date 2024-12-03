// Predict and explain first...
//This program is intended to log//The title of the recipe (e.g., “bruschetta”).//How many people the recipe serves (e.g., 2).//Each ingredient in the recipe on a new line (e.g., “olive oil”, “tomatoes”, “salt”, “pepper”).

//However, the current code has an issue. The problem is that the console.log at the end is attempting to log the entire recipe object using ${recipe}, which will output [object Object] instead of listing the individual properties. This happens because JavaScript cannot directly convert an object to a string representation of its properties without additional handling.
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}`);
console.log("ingredients:");
for (const ingredient of recipe.ingredients) {
  console.log(ingredient); 
}

