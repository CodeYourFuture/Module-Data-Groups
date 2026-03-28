// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

/**
 * Prediction:
The code attempts to log recipe information but has several issues:

String interpolation with object: ${recipe} will output [object Object] instead of the ingredients array.
Array formatting: The ingredients array won't be formatted with each ingredient on a new line as intended.
Missing iteration: There's no loop to display each ingredient separately

Running th code: 
node recipe.js

As predicted, the output is:

bruschetta serves 2
  ingredients:
[object Object]
*/

// Fixing: Using a loop to display each ingredient

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}`);
console.log("ingredients:");

for (const ingredient of recipe.ingredients) {
  console.log(`  - ${ingredient}`);
}


