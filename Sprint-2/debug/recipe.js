// Predict and explain first...

// The code is trying to log out the title, how many it serves and the ingredients of a recipe. However, it is not working because when we try to log the recipe object directly, it will not format the output as intended. Instead, we should access each property of the recipe object separately and format the output accordingly.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}`);
console.log("Ingredients:");
for (const ingredient of recipe.ingredients) {
  console.log(`- ${ingredient}`);
}
