// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// The recipe is an object so it needs to be in square brackets to be call each element by its key and index.

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(` ${recipe.title} 
  serves ${recipe.serves}
  ingredients:
  ${recipe.ingredients.join("\n  ")}
  
  `);
