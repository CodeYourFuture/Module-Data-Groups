// Predict and explain first...
// It will print bruschetta serves 2 ingredients error

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
${recipe.ingredients.join("\n")}`);
// make the ingredients into a string and use next line for each ingredient.
