// Predict and explain first...

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
for (const element of recipe.ingredients) {
  console.log(element);
}

/* In this code will log the recipe.title and recipe.serves but recipe.ingredient is not 
represented well so it can't log the array ,to access and to get all the array index i used  
for...of loop to log all the ingredient in the array*/
