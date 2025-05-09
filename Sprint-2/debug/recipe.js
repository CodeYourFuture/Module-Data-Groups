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
${recipe.ingredients.join("\n")}`);

//The issue in this code is the ingredient returns [object Object] which caused by not having access to the value
// of the recipe's ingredient. we can fix it with its key > recipe.ingredients
// This code asked to have each ingredient in new line, to fix this we can use recipe.ingredients.join("\n")
// it converts the array into a string in new line.
