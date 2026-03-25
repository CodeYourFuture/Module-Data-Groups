// Predict and explain first...
//The issue with this program is that ${recipe} inserts the entire object into the template string.
// When an object is converted to a string, it becomes "[object Object]".
//Instead we would need to access the ingredients array.
//We can loop through recipe.ingredients or use join("\n")
//This will print each ingredients on a new line.

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