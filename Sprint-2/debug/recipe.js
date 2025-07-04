// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

/* 
=======> Predict and explain first...
This program will not work as intended because it tries to log the entire 'recipe' object 
using `${recipe}` in a template literal. This will not display its properties or format the ingredients correctly.

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe}`);

=======> To fix:
Instead, we can log each property individually, by using the join() method to convert the elements in the ingredients array into a string.
Then to place each ingredient onto a new line, we can use '\n'.
*/

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`); 
