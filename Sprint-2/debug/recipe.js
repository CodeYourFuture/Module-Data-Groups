// Predict and explain first...

// Answer ${recipe.title} serves ${recipe.serves}, will correctly print bruschetta serves 2
// not printing recipe  instead printing [object object] - needs fixing

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line

// How can you fix it?
// Answer: Use recipe.ingredients to log the ingredients separately and iterate over them.
// use recipe.ingredients.join('\n') to join the ingredients into a single string with new lines.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};


console.log(`${recipe.title} serves ${recipe.serves}
  ingredients: ${recipe.ingredients.join("\n")}`);
