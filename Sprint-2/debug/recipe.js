// Predict and explain first...
//The title and serves values print correctly because the properties are accessed directly using 
// recipe.title and recipe.serves.
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}`);
for(const ingredients of recipe.ingredients)
{
  console.log(`*${ingredients}`)
}

//The program prints the recipe title and number of servings. 
// Then it loops through the ingredients array and logs each ingredient on a new line so they are displayed individually instead of printing the whole object.