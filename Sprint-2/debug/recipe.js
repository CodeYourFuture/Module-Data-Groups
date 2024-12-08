// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(recipe.title);   // "bruschetta"
console.log(recipe.serves);  // 2

for (let i = 0; i < recipe.ingredients.length; i++) {
  console.log(recipe.ingredients[i]);
}
