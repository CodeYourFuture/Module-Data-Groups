// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

/*const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe}`);
*/

// Prediction and Explanation
/* 
The line inside the template string: ${recipe} does not print the ingredients. 
Instead, JavaScript converts the entire recipe object into a string, which becomes "[object Object]". This happens 
because plain objects {} are not automatically converted into readable text. The program should print each ingredient on a new line, but the current code 
never loops through recipe.ingredients, so nothing is printed correctly.
*/

// Corrected code
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
