// Predict and explain first...

/*
Prediction: the ingredients: ${recipe} part will only print something like [Object object]

Cause: The code is attempting to print the recipe object itself, rather than the ingredients.
In Js, when printing objects, it doesn't print a string of key, pair values of its 
properties. Should be printing the ingredients property, which is an array, which does print out its values.
*/

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
${recipe.ingredients}`);
