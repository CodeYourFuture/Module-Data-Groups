// Predict and explain first...
// I think I have to use index to log out every ingredient as it is an array.
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients 
  ${recipe.ingredients[0]}:
  ${recipe.ingredients[1]}:
  ${recipe.ingredients[2]}:
  ${recipe.ingredients[3]}:
${recipe}`);
