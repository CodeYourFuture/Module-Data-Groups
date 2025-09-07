// Predict and explain first...
// The current console.log outputs ${recipe}, which converts the whole recipe object to a string as "[object Object]".

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
ingredients:`);

for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}
