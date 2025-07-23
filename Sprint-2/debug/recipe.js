// recipe is an object, and inserting it directly into a template string gives [object Object]
// The issue is that it tries to log the entire recipe object directly, which will not format the ingredients as intended.
// Instead, it should iterate over the ingredients array and log each ingredient on a new line.
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