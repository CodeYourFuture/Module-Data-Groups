// Predict and explain first...
// It is not accessing the ingredients array correctly.

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


// approach 2

// let msg = '';

// for (const ingredient of recipe.ingredients) {
//   msg += ingredient + '\n';
// }

// console.log(`${recipe.title} serves ${recipe.serves}
//   ingredients:
// ${msg}`);