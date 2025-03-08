// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};
// you have to add them to an array first. then log out them one by one using for loop.
console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:`);
for(const ingredient of recipe.ingredients) {
console.log (ingredient)}
// console.log(recipe.ingredients.join("\n"))