// Predict and explain first...
// - it didn't gives us a correct out put for the key "ingredients". Because we are trying to log an array directly, which will not format the ingredients correctly.


// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// - to fix this we use this call "recipe.ingredients" and use a new line for ech ingredient list.  



const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join('\n')}`);
