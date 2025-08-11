// Predict and explain first...

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

// Prediction: recipe will only print recipe as a string as opposed to the recipe.title and recipe.serves
// What will happen: It will instead print its string representation which is [object Object]
// Fixed by changing "${recipe}`);" to "${recipe.ingredients.join("\n")}`);"
