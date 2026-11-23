// Predict and explain first...
// Prediction:
// I think this code will print the recipe title and the number
// of servings correctly, but it will print [object Object]
// instead of the ingredients.

// Explanation:
// A regular JavaScript object cannot be displayed directly
// as a readable string using template literals.
// We need to access the ingredients property using
// recipe.ingredients.
// We can use join("\n") to print each ingredient on a new line.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it? The join() method converts an array into a string.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`);
