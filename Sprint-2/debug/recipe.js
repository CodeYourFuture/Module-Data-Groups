// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// Display the recipe title, number of servings and ingredients (one per line) 

console.log(`${recipe.title} serves ${recipe.serves}`)
console.log("ingredients:");
for (const ingredient of  recipe.ingredients) {
  console.log(ingredient);
}
