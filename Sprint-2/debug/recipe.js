// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe}`);



///SOLUTIONS TO CODE

// Predict and explain first...

// The goal of the program is to log out the title, how many it serves, and the ingredients.
// However, it isn't working as expected. The issue lies in the fact that `recipe` is an object, and when we try to log `recipe` directly, 
// JavaScript will convert it to a string, which won't give us the list of ingredients as intended.

// We need to correctly access each of the properties of the `recipe` object and log the ingredients on new lines.
// To do this, we need to iterate over the `ingredients` array and log each ingredient on a new line.

// Fixing the code:

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// Corrected code:
console.log(`${recipe.title} serves ${recipe.serves}`);
console.log("Ingredients:");
for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}
