// Predict and explain first...
// bruschetta serves 2 ingredients: [object] will get and reason is ${recipe} inside template
// string will convert entire object into a String.
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
${recipe.ingredients.join("\n")}`);// it  will give a formatted list with each ingredient in a new line
