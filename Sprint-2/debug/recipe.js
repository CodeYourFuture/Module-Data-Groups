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
${recipe}`);

// Predict and explain
// Two things are going wrong here:

//Printing the whole object instead of individual pieces: At the very end,
// ${recipe} tries to drop the entire recipe object into the text string.
// When JavaScript tries to turn a plain object into text like that, it defaults to printing [object Object].
//Ingredients are not separated: The code doesn't include a loop or a tool to extract the ingredients array and put each item on its own new line.

// we can fix this code by argeting the specific properties of the object (recipe.title, recipe.serves) and using the .join("\n") method on the ingredients array.
// The .join("\n") method takes a list and glues the items together using a newline character (\n), which forces each ingredient onto its own line.

// so here is the correct code to fix it
const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// Use .join("\n") to separate each ingredient with a new line
console.log(`${recipe.title} serves ${recipe.serves}
ingredients:
${recipe.ingredients.join("\n")}`);