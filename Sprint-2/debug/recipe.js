// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
//= Added a newline before Ingredients: for better formatting.
//Used .join("\n- ") to format the ingredients as a bulleted list, with each ingredient on a new line.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

 console.log(`${recipe.title} serves ${recipe.serves}
Ingredients:
- ${recipe.ingredients.join("\n- ")}`);

//console.log(`${recipe.title} serves ${recipe.serves}
 // ingredients: ${recipe.ingredients}`);
