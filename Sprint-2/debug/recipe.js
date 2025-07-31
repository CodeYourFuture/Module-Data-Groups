// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

// There is a recipe object and inside the recipe, ingredient property is an array.
// We should use for loop to log out the ingredients. 

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}`+'\n'+'Ingredients:');
for (const ingredient of recipe.ingredients) {
  console.log(`- ${ingredient}`);
}
