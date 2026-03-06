// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// The issue with the code is that it is trying to log the entire recipe object directly, which will not format the ingredients as desired. Instead, we need to access the properties of the recipe object and format the output correctly. We can use template literals to format the string and join the ingredients array with new line characters.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join('\n')}`);
