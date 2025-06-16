// Predict and explain first..
//The issue with the code is that we're trying to directly log the recipe object for the ingredients, which will output [object Object] instead of the actual ingredients list.To fix the problem, first we should use recipe.ingredients instead of just recipe to access the array and then, we can use join('\n') method to combine the array elements with newline characters between them

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
${recipe.ingredients.join("\n")}`);
