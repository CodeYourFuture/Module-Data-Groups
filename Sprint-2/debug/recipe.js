// Predict and explain first...
// This will not log the ingredients correctly. It will print the whole
// recipe object as [object Object] instead of each ingredient on its own line,
// because you're interpolating the entire object (`${recipe}`) instead of
// its properties and the ingredients array items.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?


const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
ingredients:`);

for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}
