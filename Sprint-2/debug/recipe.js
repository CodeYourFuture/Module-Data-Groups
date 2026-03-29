// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

//Ans: The code will log title and serves but all the ingredients will be printed in the same line
// In order to log each ingredient in a new line we need to access each ingredient
// and add a new line character after that, right now we are just logging recipe object there

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(
  `${recipe.title} serves ${recipe.serves} 
ingredients:\n` + getRecipeIngredients(recipe.ingredients)
);

function getRecipeIngredients(recipeIngredients) {
  let ingredients = "";
  for (const element of recipeIngredients) {
    ingredients += element + "\n";
  }
  return ingredients;
}
