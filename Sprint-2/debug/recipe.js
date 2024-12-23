// Predict and explain first...
// The last part of the log won't be printed correctly

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};
const ingredient = recipe.ingredients

console.log(`${recipe.title} serves ${recipe.serves} ingredients: `)
console.log(ingredient.forEach((element) => {console.log(element)}));

  

