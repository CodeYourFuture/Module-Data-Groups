// Predict and explain first...

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

//Prediction : I think I will receive an error for Line 16 as the object has not been correctly accessed.
//I was incorrect, the code did not throw an error instead returned :
//bruschetta serves 2
// ingredients:
// [object Object]
//After researching I found out nside a template literal, when you put an object like this: ${recipe}
//JavaScript tries to convert the object into a string.
//Objects convert to [object Object] by default
// When JavaScript converts an object into a string, it calls the toString() method.
// The default toString() method for plain objects returns [object Object], because JavaScript doesn’t know how to format it.
//To fix the code, We need to properly access and format the ingredients array instead of just dumping the whole object.
const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

// console.log(`${recipe.title} serves ${recipe.serves}
//   ingredients:
// ${recipe}`);

//Refactored code
console.log(`${recipe.title} serves ${recipe.serves}
  Ingredients:
${recipe.ingredients.join("\n")}`); //`.join("\n")` → Converting the Array to a Multi-line String
