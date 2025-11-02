// Predict and explain first...
/* In JavaScript, when you try to log an object directly within a template literal, it doesn't automatically
format the object in a readable way. Instead, it converts the object to a string, which results in "[object Object]".
To properly display the ingredients on new lines, we need to join the array elements into a single string with 
newline characters in between.*/

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
Ingredients:
${recipe.ingredients.map(ingredients => `-${ingredients}`).join("\n")}`);
// Using map to format each ingredient and join to create a single string with new lines 
// between each ingredient.

