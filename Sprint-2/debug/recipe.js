// Predict and explain first...

/* PREDICTION - it would print out the name, how many it serves perfectly but wouldn't work well for the ingredients.

EXPLANATION
Printing the whole object instead of ingredients: The template literal uses ${recipe} at the end. When JavaScript tries to insert an object into a template literal string, 
it calls .toString() on the object, which results in the generic string "[object Object]" instead of showing its properties or the array inside. */

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}\n
ingredients:${recipe.ingredients.join("\n")}`);
