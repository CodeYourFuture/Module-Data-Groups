// Predict and explain first...
/*
it tries to convert the entire recipe object to a string. This results in a [object Object] output instead of the ingredients array being displayed line by line.
The ingredients array needs to be joined with line breaks to display each ingredient on a new line.
*/
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// console.log(`${recipe.title} serves ${recipe.serves}
//   ingredients:
// ${recipe}`);
console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`);
