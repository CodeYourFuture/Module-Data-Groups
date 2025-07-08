// Predict and explain first...
// The code will log out the title and how many it serves, but it will not log 
// the ingredients correctly. It will not log ingredients correctly because 
// ${recipe} does not access the ingredients array properly. Secondly, it will 
// not format the ingredients on new lines as expected.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// To fix it, we need to access the ingredients array properly and format it so 
// that each ingredient appears on a new line. We can use the join method to 
// convert the array into a string with each ingredient on a new line and use 
// template literals to format the output correctly. 

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
ingredients:
  ${recipe.ingredients.join('\n  ')}`);
