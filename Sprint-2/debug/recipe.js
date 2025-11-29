// Predict and explain first...

// This outputs [object Object] because putting an object in a template string calls toString().
// The default toString() for objects just returns "[object Object]".
// References:
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/toString
// - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// Fix: Accesses each property directly and uses join() to format the ingredients
console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`);
