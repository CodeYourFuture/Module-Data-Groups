// Predict and explain first...
//${recipe} tries to insert the entire object (recipe) directly into the string.
//This will result in something like:[object Object]


// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} 
  serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`);
//recipe.ingredients is an array: ["olive oil", "tomatoes", "salt", "pepper"]
//.join("\n") turns that array into a string, separating each ingredient with a newline (\n)