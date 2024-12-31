// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?
/*
const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe}`);
*/

//____________________________________________________SOLUTION_____________________________________________________

/* 
PREDICTION: 
We have a recipe Object here. The program is trying to log out the title, serves, and ingredients. 
Each ingredient must appear on a new line. 
But the issue is on the last line: 
  --- The ingredients array is part of the object and needs to be explicitly 
  accessed and formatted for correct output. */

//  DEBUGGED CODE: 

  const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"]
  };



  /* I use template literals to allow formatting of the output naturally, 
  placing title, serves, and formatted ingredients where needed. */

  // I use recipe.ingredients method to access the ingredients array and directly retrieve the array.

  // I use the .join('\n') method to convert the array into a string where each element appears on a new line.

  console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
  ${recipe.ingredients.join('\n')}`);

  // The output is :
  
  /*  bruschetta serves 2
    ingredients:
    olive oil
  tomatoes
  salt
  pepper
*/