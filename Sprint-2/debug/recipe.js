// Predict and explain first...
/*
I think we need to use iteration to access and log ingredients one by one
*/
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:`);
for (let ingredientIndex in recipe.ingredients) {
  console.log(recipe.ingredients[ingredientIndex]);
}
