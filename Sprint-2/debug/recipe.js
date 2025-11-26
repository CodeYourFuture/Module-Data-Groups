// Predict and explain first...

// The output will contain `[object Object]` instead of the ingredients list.
// Interpolating an object `${recipe}` calls its `toString()` method.
// The default `toString()` for objects returns `"[object Object]"`.
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


// `join("\n")` converts the array into a single string with newlines between. 
console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`);
