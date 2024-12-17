// Predict and explain first...

//the ingrediants in the array will not output, they are not being accesed properly

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

//need to access each array element.


console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:`);

//need to iterate through ingredients
for (const singleIngredient of recipe.ingredients) {
  console.log(`${singleIngredient}`);
}