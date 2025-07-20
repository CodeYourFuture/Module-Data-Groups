// Predict and explain first...

/*
At he beginning the code will logs the following:
bruschetta serves 2, 
 ingredients: 
olive oil,tomatoes,salt,pepper

To fix this we need to use .join("\n") to join the ingredients by new line.
*/

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}, the ingredients required are:
${recipe.ingredients.join("\n")}`);
