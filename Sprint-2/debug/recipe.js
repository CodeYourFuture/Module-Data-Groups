// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

// I predict this code will log: bruschetta serves 2 followed by ingredients: and then [object Object]. It won't show the actual list of ingredients.
// There are two main reasons this isn't working as intended:
//      When you put ${recipe} inside a template literal, JavaScript doesn't know how to read the whole object into text, so it defaults to the placeholder [object Object]. We must point to the specific property, recipe.ingredients, instead.
//      In addition to this; even if you point to recipe.ingredients, it's an array. If we want each ingredient to appear on a new line to meet the requirements, we will need to use the .join("\n") method. The \n acts as a newline character.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};
const formattedIngredients = recipe.ingredients.join("\n");

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${formattedIngredients}`);
