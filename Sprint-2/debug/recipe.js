// Predict and explain first...
//${recipe} will not give us the ingredients

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

const ingredientsList=recipe.ingredients.join("\n");
console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:\n${ingredientsList}`);
  

