// Predict and explain first...
/* the code should log the title "bruschetta" serves "2" and should log the ingredients as well but we are getting 
bruschetta serves 2
  ingredients:
[object Object]
*/
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
  // loop through the ingredients and log each one on a new line 
  recipe.ingredients.forEach(ingredient => {
    console.log(ingredient);
  });
