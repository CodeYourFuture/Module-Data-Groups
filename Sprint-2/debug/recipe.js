// Predict and explain first...
// Prediction: The code will not print the ingredients correctly. Instead of listing them,
// it will print "[object Object]" because the template string is trying to print
// the whole recipe object directly.
// Explanation: When you use ${recipe}, JavaScript tries to convert the entire object
// into a string, which results in "[object Object]". To log the ingredients properly,
// we must access recipe.ingredients and join or loop through them.
// Each ingredient should appear on its own line, so we need to format them correctly.

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
// Expected output:
// bruschetta serves 2
// ingredients:
// olive oil
// tomatoes
// salt
// pepper     