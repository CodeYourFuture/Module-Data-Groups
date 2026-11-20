// Predict and explain first...
//The title and number of servers will display correctly. However, since the ingredients are stored in an array, I can use recipe.ingredients with a for...of loop to iterate through the array and display each ingredient on a new line.
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
