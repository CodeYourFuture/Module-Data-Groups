// Predict and explain first...
// there is a bug in this code, to access  values of ingredients we need to use dot notation (recipe.ingredients) to access it values.
// In order to print out ingredients in seperate line we can then use for of loop.
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
for (value of recipe.ingredients) {
  console.log(value);
}
