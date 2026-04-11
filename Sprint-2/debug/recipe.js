// Predict and explain first...
I expect that the program will not log out the right output because the ingridents are not being accssed correctly.
as the recipe object is being logged out rather than the ingridents. 

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
${recipe.ingredients .join("\n") }`);
