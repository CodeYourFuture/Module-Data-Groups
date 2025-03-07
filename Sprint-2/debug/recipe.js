// Predict and explain first...
// the error in the console log function, when recipe is logged it prints out object. To log the ingredients in a separate lines we use join and a separator (/n) which logs ingredients in separate lines

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
