// Predict and explain first...
// will log out the title and how many it serves, but it will not log out the ingredients on new lines. The ingredients are in an array, and the current code does not iterate over that array to log each ingredient on a new line.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}`);
for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}
