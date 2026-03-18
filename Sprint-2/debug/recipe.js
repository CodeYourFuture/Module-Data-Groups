// Predict and explain first...

// Prediction: The program may print [object Object]" instead of the ingredients.
// This happens because recipe is an object, and printing an object inside a string
// converts it to "[object Object]".
// The ingredients array should be printed instead, with each ingredient on a new line.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
ingredients:
${recipe.ingredients.join("\n")}`);
