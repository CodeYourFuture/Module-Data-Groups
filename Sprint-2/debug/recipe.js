// Predict and explain first...
// The code is incorrect. The ${recipe} variable tries to print the entire object, not just the ingredients.
// Also, the list of ingredients should be printed with each item on a new line. 
// Currently, it is not doing that.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// Use recipe.ingredients.join('\n') to turn the array into a string with each ingredient on its own line.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves} 
ingredients:
${recipe.ingredients.join('\n')}`);
