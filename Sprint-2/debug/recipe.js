// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

//Fixed the code by using a for...of loop by iterating over the recipe ingredients

console.log(`${recipe.title} serves ${recipe.serves}`);
for(let ingredient of recipe.ingredients){
  console.log(`ingredients: ${ingredient}`);
}

