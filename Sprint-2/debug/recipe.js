// Predict and explain first...

// property ingredients is an array, and would not be displayed properly

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
for (item of recipe.ingredients) {
  console.log(item);
}
