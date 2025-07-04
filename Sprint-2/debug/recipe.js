// Predict and explain first...
// bruschetta serves 2 ingredients: [object Object]

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

// ${recipe} tries to print the whole object, which converts to "[object Object]".
// To show ingredients, need access by using recipe.ingredients.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`);
