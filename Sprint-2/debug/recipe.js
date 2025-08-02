// Predict and explain first...
/*
This code is attempting to log the details of a recipe object using the format in the template literal where the title and servings are on one line and the ingredients title and the ingredients list are on new lines. 
However looking at the console log statement it looks like it will attempt to print the values in the template literals and then the whole recipe object as a string. 
Which on reflection will not work as expected.
*/

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// console.log(`${recipe.title} serves ${recipe.serves}
//   ingredients:
// ${recipe}`);
console.log(`${recipe.title} serves ${recipe.serves}
  ingredients:
${recipe.ingredients.join("\n")}`);
/*
In a template literal you can press Enter or use \n to create a line break or new line.
To make sure the ingredients are logged on a new line, the join() method is used to join a new line charachter "\n" to each of the individual array elements. 
This will ensure that each ingredient is printed on a new line in the console output.
*/
