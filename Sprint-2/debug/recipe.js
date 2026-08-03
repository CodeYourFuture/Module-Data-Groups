// Predict and explain first...
/* my prediction is that  this program will print the title and how many it services but not the ingrientes as there is no dot notation in the recipe expression so the properties are never accessed */

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}`);
  console.log("ingredients:");
  // use for of to print the value of the ingredients array element
for (const ingredients of recipe.ingredients){
console.log(ingredients);
};

