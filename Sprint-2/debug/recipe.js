// Predict and explain first...
// prediction: the output should be in the same line, and the ingredients should be separated by commas. but the output is not as expected.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// explanation: the output is not as expected because the ingredients are an array and we are trying to log out the object.
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// console.log(`${recipe.title} serves ${recipe.serves}
//   ingredients:
// ${recipe}`);

console.log(`${recipe.title} serves ${recipe.serves}
  
${recipe.ingredients.join("\n")}`); // we used .join() because the ingredients are inside an array. and we can only join the array with a comma and a space.


