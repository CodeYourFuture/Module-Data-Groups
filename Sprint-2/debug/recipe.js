// Predict and explain first...
// This code is intended to log out the details of a recipe object.
// However, it incorrectly attempts to log the entire recipe object as a string,
// which will not format the ingredients correctly.
// The expected output should include the title, the number of servings, and each ingredient on a
// new line, but the current code will not achieve that.
// To fix it, we need to iterate over the ingredients array and log each ingredient on a
// new line. We can use the `join` method to format the ingredients correctly.


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
