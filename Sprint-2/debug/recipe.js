// Predict and explain first...
// this program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// However, it does not work as expected.
// It logs the title and serves correctly, but the ingredients are not displayed properly.
// The issue is that the ingredients are being logged as an object instead of each ingredient on a new line.
// To fix this, we need to iterate over the ingredients array and log each ingredient separately


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
- ${recipe.ingredients.join("\n- ")}`);