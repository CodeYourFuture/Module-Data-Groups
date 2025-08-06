// Predict and explain first...

   bruschetta serves 2
  ingredients:
  [object Object]

  // The first part, ${recipe.title} serves ${recipe.serves}, works fine because it's using string 
  // and number values. But the last part, ${recipe}, tries to print the whole recipe object. 
  // In JavaScript, when you put an object inside a string like that, it turns into [object Object]. 
  // That's why you see that instead of the actual list of ingredients.
  
  
// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
// To fix it, we should print the ingredients properly. Since ingredients is an array, 
// we can join the items with \n so each one appears on a new line. 

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// console.log(`${recipe.title} serves ${recipe.serves}
// ingredients:
// ${recipe}`);


// Here's the fixed code:
console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
  ${recipe.ingredients.join('\n')}`); // join() creates a string; original array remains unchanged