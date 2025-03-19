// Predict and explain first...
//It wont logged in new line because ingredients has not been logged and to logged  in each line, need to use for..of loop as it will go each item in array.

// This program should log out the title, how many it serves and the ingredients.
// Each ingredient should be logged on a new line
// How can you fix it?

const recipe = {
  title: "bruschetta",
  serves: 2,
  ingredients: ["olive oil", "tomatoes", "salt", "pepper"],
};

console.log(`${recipe.title} serves ${recipe.serves}`);
console.log("ingredients:");

for (const ingredient of recipe.ingredients) {
  console.log(ingredient);
}
