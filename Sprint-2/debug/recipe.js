// Predict and explain first...
//it will display the title and number of people it serves on one line then the whole recipe on the next line

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
//by using the string literal to ensure multiple lines, then having the title on the first line, the number served on the next line and ingredients on the third line. using the dot notation to access the  properties needed.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves} 
  ingredients: ${recipe.ingredients[0]}
                ${recipe.ingredients[1]}
                ${recipe.ingredients[2]}
                ${recipe.ingredients[3]}`);
