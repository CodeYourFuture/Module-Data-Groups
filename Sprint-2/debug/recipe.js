// Predict and explain first...
//In this code, recipe.title and recipe.serves will execute as expected but ingredients: recipe will not execute as expected because we are printing out the entire recipe object. Instead What we want to do is log each ingredient on a new line.

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
for(const ingredient of recipe.ingredients){
  console.log(`- ${ingredient}`)
}
