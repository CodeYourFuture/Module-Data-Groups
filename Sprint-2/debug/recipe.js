// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};


// Prediction:
// The code will not log the ingredients correctly because it is trying to log the entire recipe object instead of just the ingredients array.
// This will result in an output that includes the object structure rather than the individual ingredients.

// Explanation:
// The template literal is incorrectly using `${recipe}` which outputs the whole object instead of iterating over the ingredients array.
// To fix this, we need to access the ingredients property and format it correctly, possibly by joining the array elements with new line characters.

// Fixed code:
console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join('\n')}`);