// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe}`);

//Prediction:  
//output will be, [object Object]. Because recipe is an object, when js converts objects to a string (template literals can only insert strings) it calls on toString() method, which 
//by default returns [Object Object]. We can fix this code by using join(\n) method. 

//fixed code:

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
Ingredients:
${recipe.ingredients.join("\n")}`);
