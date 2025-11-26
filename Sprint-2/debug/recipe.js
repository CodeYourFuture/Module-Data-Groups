// Predict and explain first...
// Prediction: An error in logging out the ingredients.
// Explanation: Because of the way to get the value or an element from an array should used the dot notation for example and reach each element using its index.

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
${recipe.ingredients[0]}
${recipe.ingredients[1]}
${recipe.ingredients[2]}
${recipe.ingredients[3]}`);
