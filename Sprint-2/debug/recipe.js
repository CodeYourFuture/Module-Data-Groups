// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

// WHY IT WASN'T WORKING:
// ${recipe} tries to embed the whole object in a template literal, which just gives "[object Object]".
// Objects don't automatically convert to a readable string in template literals.
// The fix is to use recipe.ingredients.join("\n") which converts the ingredients array
// into a string with each ingredient on its own line.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients: ${recipe.ingredients.join("\n")}`);
