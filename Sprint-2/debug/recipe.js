// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line.
// The original code tried to print the entire recipe object,
// which resulted in "[object Object]" instead of the ingredients.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// Print title and serving size
console.log(`${recipe.title} serves ${recipe.serves}`);
console.log("ingredients:");

// Print each ingredient on a new line using join()
console.log(recipe.ingredients.join("\n"));
