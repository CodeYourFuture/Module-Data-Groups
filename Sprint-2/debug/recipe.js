// Predict and explain first...
// The program will display the title and serving information, but it will not display the
// ingredients correctly because we are trying to print the whole object.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
//  ingredients:${recipe} converts the whole object into a string rather than showing individual ingredients.
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`);
