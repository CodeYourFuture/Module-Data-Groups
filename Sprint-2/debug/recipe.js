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
${recipe.ingredients.join('\n')}`);
//This is wrong because recipe is not an array to address the elements within it by their index, recipe is an object, we need to call recipe first and then call the key title, serves, ingredients
//  The correct way to log out the title, how many it serves and the ingredients is to use the object keys directly
